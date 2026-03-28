# Testausraportti (palautuspohja)

## 1. Lähestymistapa

- Kloonasin testattavan kirjaston: `https://github.com/petri-rantanen/AT00BY10`
- Toteutin unit-testit Node.js:n omalla testirunnerilla (`node:test`).
- Rajasin `.internal`-kansion kattavuuslaskennan ulkopuolelle tehtävän ohjeen mukaisesti.
- Ajoin testit ensin lokaalisti ja sen jälkeen CI-putkessa.

## 2. Ympäristö ja konfiguraatio

- Node.js versio:
- npm versio:
- Testikomento: `npm test`
- Kattavuuskomento: `npm run test:coverage`
- Kattavuustyökalu: `c8`

## 3. GitHub Actions -putki

- CI-alusta: GitHub Actions
- Workflow: `.github/workflows/ci.yml`
- Triggerit: `push` ja `pull_request`

Putken vaiheet:

1. Checkout
2. Node.js setup
3. `npm ci`
4. `npm run test:coverage`
5. Kattavuusraportin lähetys Coverallsiin

Lisää raporttiin kuvakaappaukset:

- onnistunut workflow-run GitHub Actionsista
- testitulokset run-logista

## 4. Coveralls

- Coveralls-projektin linkki:
- Kattavuusprosentti:

Lisää raporttiin jompikumpi:

- julkinen Coveralls-linkki
- kuvakaappaus Coveralls-raportista

## 5. Mitä testattiin / mitä ei testattu

### Testatut tiedostot

- (listaa testatut moduulit)

### Testaamattomat tiedostot

- (listaa tietoisesti rajaamasi tiedostot)

## 6. Löydetyt virheet ja issue-raportit

- Tein löydöksistä issue-raportit GitHubin issue trackeriin.
- Issue-linkit:
  - 
  - 
  - 

Taustalista löydöksistä on tiedostossa:

- `docs/issues-to-report.md`

## 7. Lopullinen arvio (production readiness)

Kirjoita tähän oma arvio, esimerkiksi:

- Nykyisellä testikattavuudella ja löydetyillä virheillä kirjasto on / ei ole valmis tuotantoon.
- Perustelut:
  - (esim. laskentaan liittyvät loogiset virheet julkisissa API-funktioissa)
  - (esim. dokumentaation ja toteutuksen ristiriidat)
  - (esim. osa moduuleista jäi ilman testejä)
