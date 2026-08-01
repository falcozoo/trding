#!/usr/bin/env python3
"""
Daily market newsletter for Trding.io.

Pipeline (100% automated, run by a Hermes cron each morning):
  1. Fetch live market data (Gold, EUR/USD, S&P 500, Nasdaq, BTC, Fear & Greed).
     Source: Yahoo Finance + alternative.me — free, no API key.
  2. Build an on-brand, beginner-friendly HTML email ("Today's market brief").
  3. Rotate a recommended broker (CPA link) as the day's featured CTA.
  4. Send to every contact in the Resend Audience via the Resend API.

Env required (read from /data/trding/.env.local or process env):
  RESEND_API_KEY       full-access key
  RESEND_FROM          "Trding.io <hello@trding.io>"
  RESEND_AUDIENCE_ID   audience holding the subscribers

Usage:
  python3 daily_newsletter.py            # real run: fetch + send to all
  python3 daily_newsletter.py --dry      # build only, print HTML, no send
  python3 daily_newsletter.py --test you@example.com   # send only to one addr
"""
import json
import os
import sys
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone

UA = {"User-Agent": "Mozilla/5.0"}
BRAND = "#E08A2E"
INK = "#1F2933"
MUTED = "#5B6470"
GREEN = "#22A06B"
RED = "#D64545"

# ---- Featured broker rotation (recommended only, with CPA links) ----
BROKERS = [
    {"name": "RaiseFX", "slug": "raisefx",
     "url": "https://partners.raisefx.com/visit/?bta=130102&brand=raisefx",
     "hook": "tight 0.3-pip spreads and same-day withdrawals"},
    {"name": "Axi", "slug": "axi",
     "url": "https://records.axiaffiliates.com/visit/?bta=43128&brand=axitrader",
     "hook": "tier-1 regulation (ASIC, FCA) and raw spreads"},
    {"name": "Fxcess", "slug": "fxcess",
     "url": "https://go.fxcess.com/visit/?bta=35646&brand=fxcess",
     "hook": "flexible account types and CySEC oversight"},
    {"name": "VT Markets", "slug": "vt-markets",
     "url": "https://go.vtaffiliates.com/visit/?bta=39856&nci=5942",
     "hook": "strong education tools and multi-asset access"},
    {"name": "Vantage", "slug": "vantage",
     "url": "https://www.vantagemarkets.com/open-live-account/?affid=NTgyNzY=&invitecode=Z9PeieRe",
     "hook": "a polished app and solid tier-1 regulation"},
]


def yahoo(symbol):
    url = (f"https://query1.finance.yahoo.com/v8/finance/chart/"
           f"{symbol}?interval=1d&range=5d")
    req = urllib.request.Request(url, headers=UA)
    d = json.load(urllib.request.urlopen(req, timeout=20))
    m = d["chart"]["result"][0]["meta"]
    price = m.get("regularMarketPrice")
    prev = m.get("chartPreviousClose") or m.get("previousClose")
    chg = round((price - prev) / prev * 100, 2) if price and prev else None
    return {"price": price, "chg_pct": chg}


def fng():
    d = json.load(urllib.request.urlopen(
        "https://api.alternative.me/fng/?limit=1", timeout=20))
    x = d["data"][0]
    return {"value": int(x["value"]), "label": x["value_classification"]}


def fetch_market():
    return {
        "gold": yahoo("GC=F"),
        "eurusd": yahoo("EURUSD=X"),
        "sp500": yahoo("^GSPC"),
        "nasdaq": yahoo("^IXIC"),
        "btc": yahoo("BTC-USD"),
        "fng": fng(),
    }


def arrow(chg):
    if chg is None:
        return f'<span style="color:{MUTED}">—</span>'
    if chg > 0:
        return f'<span style="color:{GREEN};font-weight:700">&#9650; +{chg}%</span>'
    if chg < 0:
        return f'<span style="color:{RED};font-weight:700">&#9660; {chg}%</span>'
    return f'<span style="color:{MUTED}">0.00%</span>'


def fmt(price, dp=2):
    if price is None:
        return "n/a"
    return f"{price:,.{dp}f}"


def plain_take(mk):
    """One beginner-friendly sentence reading the day's mood."""
    fv = mk["fng"]["value"]
    mood = mk["fng"]["label"].lower()
    up = sum(1 for k in ("sp500", "nasdaq") if (mk[k]["chg_pct"] or 0) > 0)
    gold_up = (mk["gold"]["chg_pct"] or 0) > 0
    bits = []
    if up == 2:
        bits.append("Stock indices are higher today, a sign of risk appetite.")
    elif up == 0:
        bits.append("Stock indices are softer today, a more cautious tone.")
    else:
        bits.append("Stock indices are mixed today — no clear direction.")
    if gold_up:
        bits.append("Gold is up, which often means some investors are hedging.")
    else:
        bits.append("Gold is easing back as nerves calm a little.")
    bits.append(f"The Fear &amp; Greed gauge sits at {fv} ({mood}), so overall "
                f"sentiment is {'cautious' if fv < 45 else 'balanced' if fv < 55 else 'confident'}.")
    return " ".join(bits)


def row(label, price, chg, dp=2, unit=""):
    return f"""<tr>
      <td style="padding:10px 0;border-bottom:1px solid #EFEAE1;font-weight:600">{label}</td>
      <td style="padding:10px 0;border-bottom:1px solid #EFEAE1;text-align:right">{unit}{fmt(price, dp)}</td>
      <td style="padding:10px 0;border-bottom:1px solid #EFEAE1;text-align:right">{arrow(chg)}</td>
    </tr>"""


def build_html(mk, broker):
    today = datetime.now(timezone.utc).strftime("%A, %d %B %Y")
    rows = "".join([
        row("Gold (XAU/USD)", mk["gold"]["price"], mk["gold"]["chg_pct"], 2, "$"),
        row("EUR / USD", mk["eurusd"]["price"], mk["eurusd"]["chg_pct"], 4),
        row("S&amp;P 500", mk["sp500"]["price"], mk["sp500"]["chg_pct"], 2),
        row("Nasdaq", mk["nasdaq"]["price"], mk["nasdaq"]["chg_pct"], 2),
        row("Bitcoin", mk["btc"]["price"], mk["btc"]["chg_pct"], 0, "$"),
    ])
    fng_v = mk["fng"]["value"]
    fng_l = mk["fng"]["label"]
    take = plain_take(mk)
    body = f"""
    <p style="font-size:13px;color:{MUTED};margin:0 0 4px;text-transform:uppercase;letter-spacing:.5px">Daily market brief · {today}</p>
    <h1 style="font-size:22px;margin:0 0 14px;color:{INK}">Today's market, in plain English</h1>

    <table style="width:100%;border-collapse:collapse;font-size:15px;margin:0 0 18px">{rows}</table>

    <div style="background:#FBF7F0;border-radius:12px;padding:14px 16px;margin:0 0 20px">
      <div style="font-size:13px;color:{MUTED};margin-bottom:4px">Market sentiment</div>
      <div style="font-size:16px;font-weight:700;color:{INK}">Fear &amp; Greed: {fng_v} — {fng_l}</div>
    </div>

    <p style="margin:0 0 18px;line-height:1.6">{take}</p>

    <p style="margin:0 0 6px;font-weight:700;color:{INK}">What it means for you</p>
    <p style="margin:0 0 22px;line-height:1.6;color:{INK}">
      You don't need to react to every move. What matters is being set up with a
      regulated broker and a plan before you trade — so when you do act, costs are
      low and your money is safe.
    </p>

    <div style="border:1px solid #EFEAE1;border-radius:14px;padding:18px;margin:0 0 22px">
      <div style="font-size:13px;color:{MUTED};margin-bottom:6px">Broker in focus today</div>
      <div style="font-size:18px;font-weight:800;color:{INK};margin-bottom:6px">{broker['name']}</div>
      <p style="margin:0 0 14px;line-height:1.55;color:{INK}">Known for {broker['hook']}. See where it ranks on our neutral scoreboard, or open an account directly.</p>
      <a href="{broker['url']}" style="display:inline-block;background:{BRAND};color:#fff;text-decoration:none;font-weight:700;padding:11px 20px;border-radius:10px;margin-right:8px">Open a {broker['name']} account &rarr;</a>
      <a href="https://trding.io/brokers/{broker['slug']}" style="display:inline-block;color:{BRAND};text-decoration:none;font-weight:600;padding:11px 4px">Read the review</a>
    </div>

    <p style="margin:0 0 8px;font-weight:700;color:{INK}">Not sure which broker fits you?</p>
    <p style="margin:0 0 22px">
      <a href="https://trding.io/quiz" style="display:inline-block;background:{INK};color:#fff;text-decoration:none;font-weight:700;padding:11px 20px;border-radius:10px">Take the 60-second quiz &rarr;</a>
    </p>
    """
    shell = f"""<div style="font-family:-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;padding:8px 4px;color:{INK};line-height:1.55">
      <div style="font-size:22px;font-weight:800;color:{INK};margin-bottom:16px">trding<span style="color:{BRAND}">.io</span></div>
      {body}
      <hr style="border:none;border-top:1px solid #E7E2D9;margin:24px 0" />
      <p style="font-size:12px;color:{MUTED};margin:0">
        Prices are indicative, sourced automatically at send time. Educational content only,
        not investment advice. Trading involves substantial risk of loss and most retail
        traders lose money. You're receiving this because you signed up at trding.io.
      </p>
    </div>"""
    return shell


# ---------------- Resend sending ----------------

def load_env():
    path = "/data/trding/.env.local"
    if os.path.exists(path):
        for line in open(path):
            line = line.strip()
            if line and "=" in line and not line.startswith("#"):
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())


def resend_get(path):
    req = urllib.request.Request(
        f"https://api.resend.com{path}",
        headers={"Authorization": f"Bearer {os.environ['RESEND_API_KEY']}",
                 "User-Agent": "trding-newsletter/1.0"})
    return json.load(urllib.request.urlopen(req, timeout=30))


def resend_post(path, payload):
    data = json.dumps(payload).encode()
    req = urllib.request.Request(
        f"https://api.resend.com{path}", data=data, method="POST",
        headers={"Authorization": f"Bearer {os.environ['RESEND_API_KEY']}",
                 "Content-Type": "application/json",
                 "User-Agent": "trding-newsletter/1.0"})
    try:
        return json.load(urllib.request.urlopen(req, timeout=30)), 200
    except urllib.error.HTTPError as e:
        return e.read().decode(), e.code


def get_contacts():
    aud = os.environ["RESEND_AUDIENCE_ID"]
    d = resend_get(f"/audiences/{aud}/contacts")
    return [c["email"] for c in d.get("data", [])
            if not c.get("unsubscribed")]


def send_batch(recipients, subject, html):
    """Resend /emails/batch sends up to 100 messages per call."""
    frm = os.environ["RESEND_FROM"]
    sent, failed = 0, 0
    for i in range(0, len(recipients), 100):
        chunk = recipients[i:i + 100]
        payload = [{"from": frm, "to": [r], "subject": subject, "html": html}
                   for r in chunk]
        res, code = resend_post("/emails/batch", payload)
        if code == 200:
            sent += len(chunk)
        else:
            failed += len(chunk)
            print(f"[warn] batch {i//100} failed ({code}): {res}", file=sys.stderr)
        time.sleep(0.6)  # stay under rate limits
    return sent, failed


def main():
    load_env()
    args = sys.argv[1:]
    dry = "--dry" in args
    test_to = None
    if "--test" in args:
        test_to = args[args.index("--test") + 1]

    mk = fetch_market()
    # Rotate broker by day-of-year so it's deterministic and varied.
    broker = BROKERS[datetime.now(timezone.utc).timetuple().tm_yday % len(BROKERS)]
    html = build_html(mk, broker)
    subject = "Today's market brief — Gold, EUR/USD & the mood in 60 seconds"

    if dry:
        print(html)
        print("\n--- FEATURED BROKER:", broker["name"], file=sys.stderr)
        return

    if test_to:
        res, code = resend_post("/emails", {
            "from": os.environ["RESEND_FROM"], "to": [test_to],
            "subject": subject, "html": html})
        print(f"TEST send to {test_to}: HTTP {code} -> {res}")
        return

    recipients = get_contacts()
    if not recipients:
        print("No recipients in audience — nothing to send.")
        return
    sent, failed = send_batch(recipients, subject, html)
    print(f"Daily newsletter sent. recipients={len(recipients)} "
          f"sent={sent} failed={failed} broker={broker['name']}")


if __name__ == "__main__":
    main()
