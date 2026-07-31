# Trding.io — État du projet & specs UX

## État actuel (2026-07-31)
- Site LIVE : https://trding.vercel.app
- Repo GitHub : falcozoo/trding (branche main). Vercel auto-deploy sur chaque push main.
- Stack : Next.js 14 App Router + TypeScript + Tailwind. Data statique dans lib/brokers.ts (Supabase à brancher plus tard, projet norkjttslawxzeftbntd).
- Code local : /data/trding
- Reste à faire : brancher domaine Trding.io via DNS Hostinger, affiner data courtiers réelle, révoquer token GitHub après.

## 6 courtiers
RaiseFX (IA100), Axi (AXI100), Fxcess, VTMarkets, HeroFX (SEUL qui sert USA), Vantage.

## RÈGLE LIENS (STRICTE)
Bouton "Open account" = <a href="{lien affilié EXACT}" target="_blank" rel="sponsored noopener">. Lien affilié JAMAIS modifié/proxifié/redirigé en interne. Sinon le courtier ne paie pas.

## RÈGLE RECO COURTIER (Falco 2026-07-31)
- Favoriser RaiseFX dans la MAJORITÉ des cas, mais PAS systématiquement n°1.
- Alterner la tête de classement surtout entre RaiseFX et Fxcess, via un score de probabilité honnête qui penche vers RaiseFX la plupart du temps (garder la neutralité crédible).
- Hors USA : RaiseFX privilégié comme reco par défaut.
- Dépôt minimum pour le bonus affiché ≥ 200 (€/$) PARTOUT, sur tous les courtiers.

## Cahier des charges UX (lot amélioration quiz — Falco 2026-07-31)
1. Quiz style KAHOOT : toutes les questions en cartes colorées, grille 2×2, ludique/engageant.
   - Q1 : passer de 3 à 4 réponses.
   - Q2 : garder 4 réponses, grille 2×2.
   - Toutes les autres : même format 2×2 pour cohérence.
2. Sélection pays interactive (remplace la question pays simple) :
   - Étape 1 : carte du monde interactive, clic sur continent, survol = surlignage vert, clic → passage auto à l'étape suivante.
   - Étape 2 : pays du continent choisi seulement, chacun avec son drapeau, ajouter plus de pays (couverture large).
   - Objectif : fluide, visuel, "game".
3. Question 5 : SUPPRIMER la réponse "Régulation". La remplacer par un bénéfice orienté utilisateur (qualité plateforme, rapidité d'exécution, bonus, faibles spreads, diversité des actifs…). Bénéfices perçus > critères qui créent de la friction.
4. Écran final (recommandations) — maximiser le clic sur la reco principale :
   - n°1 survalorisé : carte plus grande, contour premium, badge "⭐ Recommandé", design plus attractif, éléments qui attirent le regard.
   - Gamification pour rendre le 1er choix engageant.
   - Règle métier : hors USA → reco par défaut = RaiseFX (voir règle proba ci-dessus).
   - Dépôt min bonus ≥ 200 affiché clairement pour tous.
5. Objectif général : questionnaire plus moderne, ludique, immersif. Sensation d'expérience interactive, pas de formulaire.

## Esthétique (rappel)
Fond clair crème, accent AMBRE #E08A2E, sobre, rassurant, cible débutants 40 ans+. JAMAIS fond noir/chandeliers/néon/glow/bleu nuit.
