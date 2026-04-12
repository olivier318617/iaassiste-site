# Test_site – IAassiste

Projet de site web **IAassiste** conforme au cahier des charges issu du document « Analyse sites web – Cahier des charges IAassiste » (références Brice&Vince Studio et Optima Academy, certification Qualiopi).

## Contexte

- **IAassiste** : entreprise française, double activité – agence de conseil en automatisation par IA (RPA, assistants, connecteurs CRM/ERP, flux) et centre de formation certifié Qualiopi.
- Ce dépôt est une **maquette statique** (HTML/CSS/JS) pour valider l’architecture, le design et les contenus obligatoires. Intégration CMS, paiement et back-office Qualiopi sont à prévoir en phase suivante.

## Arborescence

```
Test_site/
├── index.html                    # Accueil (message fort, 2 CTAs, avantages, logos clients)
├── mentions-legales.html
├── politique-confidentialite.html
├── css/
│   └── style.css                 # Charte : violet/bleu, accents fuchsia/rouge
├── js/
│   └── main.js                   # Skip link, menu mobile, bandeau cookies RGPD
├── images/
├── solutions/
│   └── index.html                # 5 solutions + cas clients
├── formations/
│   ├── index.html                # Catalogue
│   ├── fiche-introduction-ia.html # Exemple fiche Qualiopi
│   └── financements.html
├── a-propos/
│   └── index.html                # Histoire, valeurs, équipe
├── references-temoignages/
│   └── index.html                # Témoignages, satisfaction, réclamations (lien formulaire /reclamation), dépôt d’avis
├── blog/
│   └── index.html                # Ressources / articles
├── faq/
│   └── index.html                # FAQ (financement, RGPD, etc.)
└── contact/
    └── index.html                # Formulaire, coordonnées, référent handicap, Qualiopi
```

Dans le pied de page de chaque page HTML : liens **Mentions légales**, **Politique de confidentialité** et **Réclamation** (formulaire en ligne sur `https://www.iaassiste.fr/reclamation`).

## Conformité cahier des charges

- **Accueil** : slogan, visuel (placeholder), 2 boutons « Découvrir nos solutions » / « Voir nos formations », avantages (gain de temps, expertise, financement), zone logos clients.
- **Solutions** : page dédiée avec 5 sous-pages prévues (assistant IA, RPA/OCR, connecteurs, e-mail IA, dashboards) + renvoi cas clients.
- **Formations** : catalogue en cartes, fiche formation type (objectifs, public, durée, modalités, évaluation, prix, handicap, PDF, devis), page Financements, accessibilité.
- **À propos** : histoire, valeurs, équipe (Qualiopi – qualification du personnel).
- **Références & témoignages** : satisfaction, témoignages, formulaire avis/réclamation (critère 7 Qualiopi).
- **Blog** : structure prête pour articles (SEO, veille).
- **FAQ** : financement, inscription, matériel, RGPD, mentions légales.
- **Contact** : formulaire (nom, e-mail, tél, message), consentement RGPD, coordonnées, référent handicap, lien prise de rendez-vous, badge Qualiopi.
- **Légal** : Mentions légales (éditeur, hébergeur, CGV), Politique de confidentialité (RGPD, cookies, droits).
- **Design** : palette violet/bleu foncé, accents rouge/fuchsia pour les CTA ; structure modulaire (pages dédiées, pas one-page) ; responsive, contrastes, focus clavier.
- **RGPD** : bandeau cookies (accepter/refuser), cases d’acceptation sur formulaires, lien vers politique de confidentialité.

## Prévisualisation

Le port **8000** est souvent utilisé par d’autres projets (ex. IAassiste MVP). Utilisez par exemple le port **8001** :

```bash
cd Test_site
python3 -m http.server 8001
```

Puis ouvrir **http://localhost:8001**

## À compléter côté contenu

- Textes définitifs, coordonnées, adresse, SIRET, nom du référent handicap.
- Logos clients, visuels hero, badge Qualiopi (après certification).
- Sous-pages solutions (assistant-ia.html, rpa-ocr.html, etc.) si besoin de pages dédiées.
- Intégration CMS (WordPress, Webflow ou headless), module réservation (Cal.com/Calendly), analytics (Matomo/GA) avec consentement cookies.

## Références

- Cahier des charges : « Analyse sites web – Cahier des charges IAassiste » (PDF).
- Qualiopi : [travail-emploi.gouv.fr/qualiopi](https://travail-emploi.gouv.fr/qualiopi-marque-de-certification-qualite-des-prestataires-de-formation)
