# Configuration finale du site — avant prospection

> Le site est déjà déployé sur <https://davidstrix88.github.io/sentinel-web/>.
> ✅ **Email dédié créé et configuré :** `sentinelweb.contact@gmail.com`.
> ⏳ Identité légale à compléter plus tard dans les pages mentions légales / confidentialité.

## 1. Créer l'adresse email dédiée

Objectif : ne pas utiliser une adresse personnelle dans une prospection B2B.

### Étapes (Gmail, sans achat de domaine)

1. Aller sur <https://accounts.google.com/signup> → « Créer un compte » → « Pour moi ».
2. Adresse suggérée : **`sentinelweb.contact@gmail.com`**
   (si prise : `sentinel.web.contact@gmail.com` ou `contact.sentinelweb@gmail.com`).
3. Mot de passe long et unique (gestionnaire de mots de passe recommandé).
4. Ajouter un **numéro de téléphone de récupération** et activer la **double authentification**.
5. Dans Gmail → Paramètres → Général → « Signature » :
   ```text
   David — Sentinel Web
   Audit & test d'intrusion web/API
   https://davidstrix88.github.io/sentinel-web/
   ```
6. (Optionnel) Paramètres → Comptes et importation → « Envoyer en tant que » avec ton adresse personnelle si tu veux répondre depuis la même boîte.
7. Tester : envoyer un email à cette adresse depuis une autre boîte.

### Fichiers à modifier ensuite

Remplacer `sentinelweb.contact@gmail.com` par la nouvelle adresse dans :

- `index.html` (hero, section contact, pied de page)
- `script.js` (destinataire du mail pré-rempli)
- `mentions-legales.html`
- `confidentialite.html`

> Le blog (`blog/index.html`) n'a pas d'adresse en dur : il renvoie vers l'accueil.

## 2. Informations légales à fournir

Pour remplir `mentions-legales.html` et `confidentialite.html`, transmets :

| Information | Exemple |
|---|---|
| Nom complet / raison sociale | David [Nom de famille] |
| Statut juridique | Micro-entreprise / entreprise individuelle / SASU… |
| Numéro SIRET | 14 chiffres (ou « en cours d'attribution ») |
| Adresse professionnelle | Adresse postale complète |
| Téléphone professionnel | Facultatif |
| Directeur de publication | Nom |
| Hébergeur | GitHub Inc. (Pages), à confirmer |
| Email de contact | Celui créé à l'étape 1 |

Si tu préfères ne pas les écrire dans le chat, tu peux modifier directement les
deux fichiers HTML : chercher `[Nom et prénom / dénomination sociale]` et les
champs entre crochets.

## 3. Republication

Après modification :

```bash
cd ~/pentest-business/08-site
python3 -m http.server 8088          # vérification locale
```

Puis push vers `davidstrix88/sentinel-web` (branche `main`) et activation GitHub
Pages déjà en place. Le token OpenRouter n'est pas impliqué ; un device flow
GitHub sera nécessaire pour pousser.

## 4. Checklist finale

- [ ] Adresse dédiée créée et testée.
- [ ] Adresse remplacée dans les 4 fichiers.
- [ ] `mentions-legales.html` complété.
- [ ] `confidentialite.html` complété (responsable de traitement, hébergeur).
- [ ] Article 1 visible sur le site en ligne.
- [ ] Push effectué et URL en ligne vérifiée.
- [ ] **Ensuite seulement** : démarrer la prospection avec les templates.
