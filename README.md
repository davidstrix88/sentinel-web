# Sentinel Web — site vitrine

**En ligne :** <https://davidstrix88.github.io/sentinel-web/>

Site statique (HTML/CSS/JS, aucune dépendance externe, aucun cookie) présentant
les offres d'audit et de pentest web/API.

## Aperçu local

```bash
cd ~/pentest-business/08-site
./serve.sh            # http://127.0.0.1:8088
```

Ou simplement ouvrir `index.html` dans un navigateur.

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique : hero, offres, méthode, preuves, FAQ, contact |
| `mentions-legales.html` | Modèle de mentions légales (champs à compléter) |
| `confidentialite.html` | Politique de confidentialité (aucun cookie, RGPD) |
| `404.html` | Page d'erreur |
| `styles.css` | Thème sombre, responsive, focus visible, `prefers-reduced-motion` |
| `script.js` | Menu mobile, année du footer, formulaire → email pré-rempli |
| `favicon.svg` | Icône du site |
| `robots.txt` | Indexation (pages légales exclues) |
| `_headers` | En-têtes de sécurité pour Netlify / Cloudflare Pages |
| `netlify.toml` | Configuration de déploiement Netlify |
| `.nojekyll` | Nécessaire pour GitHub Pages (fichiers non Jekyll) |
| `serve.sh` | Serveur local de prévisualisation |
| `blog/index.html` | Article 1 (« Un « ; » et c'est fait ») |

## À personnaliser avant mise en ligne

1. **Identité légale** : compléter `mentions-legales.html` (nom, statut, adresse,
   SIRET, directeur de publication, hébergeur) et `confidentialite.html`
   (responsable de traitement, hébergeur).
2. **Email / domaine** : remplacer `sentinelweb.contact@gmail.com` si besoin
   (`index.html`, `script.js`, pages légales).
3. **Preuves** : les deux encarts « labo » peuvent être remplacés par des
   références client anonymisées après les premières missions.
4. **Tarifs** : synchroniser avec `../01-business/offres-tarifs.md`.
5. **Analytics** : aucun par défaut (RGPD-friendly). Ne pas en ajouter sans
   consentement.

## Mise en ligne sans acheter de domaine

> **Déployé le 19/11/2026 :** <https://davidstrix88.github.io/sentinel-web/>
> Dépôt : <https://github.com/davidstrix88/sentinel-web>

### Option A — GitHub Pages (gratuit, URL `*.github.io`)

1. Créer un compte GitHub et un dépôt public (ex. `sentinel-web`).
2. Depuis `08-site/` :
   ```bash
   git init
   git add .
   git commit -m "Site Sentinel Web"
   git branch -M main
   git remote add origin https://github.com/<utilisateur>/sentinel-web.git
   git push -u origin main
   ```
3. Dans le dépôt : `Settings → Pages → Deploy from a branch → main / (root)`.
4. Le site sera accessible à `https://<utilisateur>.github.io/sentinel-web/`.
   Les liens internes sont relatifs : ils fonctionnent dans ce sous-dossier.
5. Plus tard, ajouter le domaine personnalisé dans `Settings → Pages` (fichier
   `CNAME`) sans rien changer au code.

### Option B — Netlify Drop (gratuit, sans compte au départ)

1. Ouvrir <https://app.netlify.com/drop>.
2. Glisser-déposer le dossier `08-site/`.
3. Netlify fournit une URL `*.netlify.app` en HTTPS.
4. Créer un compte pour conserver le site et pouvoir le mettre à jour.

### Option C — Cloudflare Pages (gratuit)

1. `Workers & Pages → Create → Pages → Upload assets`.
2. Déposer `08-site/` ; URL `*.pages.dev` en HTTPS.

### Hébergement classique (OVH, o2switch…)

- Uploader les fichiers par FTP dans `www/`.
- Activer HTTPS (Let's Encrypt) et forcer HTTP → HTTPS.

## Contrôles avant publication

- [x] HTML parse sans erreur (html5lib), liens et ancres valides.
- [x] Test mobile (menu, lisibilité, formulaire).
- [x] En-têtes de sécurité préparés (`_headers`, `netlify.toml`).
- [x] Aucun cookie, aucune ressource tierce.
- [x] Email de contact réellement relevé : `sentinelweb.contact@gmail.com`.
- [ ] Identité légale complétée dans les deux pages légales.
- [x] Test HTTPS et redirections après déploiement (GitHub Pages).
- [x] CSP et politique de referrer via balise `meta` (GitHub Pages n'applique pas `_headers`).
- [x] Aucun secret, aucune donnée client réelle dans le dépôt.
- [x] Article 1 du plan de contenu publié (`blog/index.html`) et lié depuis l'accueil.

## Positionnement

Le site revendique uniquement ce qui est démontrable : tests OWASP, preuves
reproductibles, rapports de laboratoire. Ne pas afficher de certification ou de
référence client qui n'existe pas encore.
