# AT00BY10-kirjaston testausraportti

## 1. Lähestymistapa

Tässä tehtävässä testasin annetun AT00BY10-kirjaston yksikkötesteillä. Toteutin testit Node.js:n omalla testirunnerilla (`node:test`) ja mittasin kattavuutta `c8`-työkalulla.

Tavoitteena oli:

- toteuttaa kirjastolle yksikkötestit
- saavuttaa vähintään 60 % kattavuus ilman `.internal`-kansiota
- rakentaa toimiva GitHub Actions -workflow
- lähettää kattavuusraportit Coverallsiin
- dokumentoida löydetyt virheet issue-raportteina

Testit on jaettu kolmeen tiedostoon aihealueittain:

- `test/math-array.test.js`
- `test/object-collection.test.js`
- `test/string-func.test.js`

Testeissä on kaksi osaa:

1. läpipitävät yksikkötestit, joilla varmistetaan kirjaston toimivia peruskäyttötapauksia
2. skipatut bugitestit, jotka dokumentoivat testauksessa löydettyjä virheitä rikkomatta CI-putkea

Ratkaisu valittiin siksi, että tehtävässä piti sekä toteuttaa toimiva testiputki että raportoida löydetyt ongelmat. Skipatut bugitestit näyttävät konkreettisesti, mitä odotettua toimintaa kirjasto ei tällä hetkellä täytä.

## 2. Ympäristö ja konfiguraatio

- Testattava kirjasto: `https://github.com/petri-rantanen/AT00BY10`
- Node.js: `v22.19.0`
- npm: `10.9.3`
- Testikomento: `npm test`
- Kattavuuskomento: `npm run test:coverage`
- Kattavuustyökalu: `c8`

Projektin testauskonfiguraatio on määritelty `package.json`-tiedostossa. Kattavuusajo käyttää seuraavaa komentoa:

```bash
c8 --reporter=text-summary --reporter=lcov --exclude='src/.internal/**' --exclude='src/LICENSE' node --test
```

`.internal`-kansio on siis rajattu pois kattavuuslaskennasta tehtävänannon mukaisesti.

Lisäksi repossa on `.gitignore`, jossa on rajattu pois ainakin:

- `node_modules/`
- `coverage/`
- `.nyc_output/`
- `.DS_Store`
- `.env`

## 3. Yksikkötestien toteutus

Yksikkötestit kattavat kirjaston useita julkisia moduuleja. Testeissä tarkastetaan sekä tavallisia käyttötapauksia että muutamia reunaehtoja.

### Testien rakenne

- `test/math-array.test.js`
  - array- ja math-funktiot
- `test/object-collection.test.js`
  - object-, collection- ja type check -funktiot
- `test/string-func.test.js`
  - string- ja function-funktiot

### Lokaalit testitulokset

Komennolla:

```bash
npm test
```

saatiin seuraava tulos:

- testejä yhteensä: 33
- läpäistyjä: 23
- epäonnistuneita: 0
- skipattuja bugitestejä: 10

Skipatut testit dokumentoivat löydettyjä virheitä seuraavissa moduuleissa:

- `divide`
- `clamp`
- `chunk`
- `compact`
- `defaultTo`
- `countBy`
- `camelCase`
- `eq`
- `isBuffer`
- `toString`

## 4. Kattavuus

Kattavuus ajettiin komennolla:

```bash
npm run test:coverage
```

Lokaalisti saadut tulokset olivat:

- Statements: `94.08 %`
- Branches: `75.11 %`
- Functions: `83.33 %`
- Lines: `94.08 %`

Kattavuus ylittää selvästi tehtävänannon vähimmäisvaatimuksen `60 %`.

Kattavuusraportti muodostuu lokaalisti hakemistoon:

- `coverage/lcov.info`
- `coverage/lcov-report/`

## 5. GitHub Actions -putki

GitHub Actions -workflow on tiedostossa:

- `.github/workflows/ci.yml`

Workflow käynnistyy tapahtumista:

- `push`
- `pull_request`

Putken vaiheet ovat:

1. Checkout (`actions/checkout@v4`)
2. Node.js-ympäristön asennus (`actions/setup-node@v4`, Node 22)
3. riippuvuuksien asennus komennolla `npm ci`
4. testien ja kattavuuden ajo komennolla `npm run test:coverage`
5. kattavuusraportin lähetys Coverallsiin (`coverallsapp/github-action@v2`)

Workflow täyttää tehtävänannon vähimmäisvaatimuksen siitä, että testit ja raportointi ajetaan automaattisesti, kun muutoksia pusketaan GitHubiin.

Lisää tähän palautusversioon GitHubista:

- kuvakaappaus onnistuneesta workflow-ajosta
- kuvakaappaus run-login testituloksista

## 6. Coveralls-integraatio

Kattavuusraportin lähetys on konfiguroitu GitHub Actions -workflowhun käyttämällä GitHub Actionsin `GITHUB_TOKEN`-salaisuutta. Ratkaisu noudattaa tehtävänannon ohjetta siitä, ettei julkiseen repositorioon jätetä näkyviä tunnuksia tai tokeneita.

Workflow lähettää tiedoston:

- `coverage/lcov.info`

Coverallsiin.

Lisää tähän palautusversioon Coverallsista:

- julkinen Coveralls-linkki

tai

- kuvakaappaus Coveralls-raportista

Lisää myös README-tiedostoon omaa julkista repositoryasi vastaava Coveralls-badge.

## 7. Testatut ja testaamattomat tiedostot

### Testatut tiedostot

Seuraaville julkisille moduuleille on vähintään perustason testejä:

- `src/add.js`
- `src/at.js`
- `src/camelCase.js`
- `src/capitalize.js`
- `src/castArray.js`
- `src/ceil.js`
- `src/chunk.js`
- `src/clamp.js`
- `src/compact.js`
- `src/countBy.js`
- `src/defaultTo.js`
- `src/defaultToAny.js`
- `src/difference.js`
- `src/divide.js`
- `src/drop.js`
- `src/endsWith.js`
- `src/eq.js`
- `src/every.js`
- `src/filter.js`
- `src/get.js`
- `src/isArguments.js`
- `src/isArrayLike.js`
- `src/isArrayLikeObject.js`
- `src/isBoolean.js`
- `src/isBuffer.js`
- `src/isDate.js`
- `src/isEmpty.js`
- `src/isLength.js`
- `src/isObject.js`
- `src/isObjectLike.js`
- `src/isSymbol.js`
- `src/isTypedArray.js`
- `src/keys.js`
- `src/map.js`
- `src/memoize.js`
- `src/reduce.js`
- `src/slice.js`
- `src/toFinite.js`
- `src/toInteger.js`
- `src/toNumber.js`
- `src/toString.js`
- `src/upperFirst.js`
- `src/words.js`

### Testaamattomat tiedostot

Seuraavat tiedostot tai tiedostoryhmät jäivät tarkoituksellisesti testauksen ulkopuolelle:

- `src/.internal/*`
  - nämä on rajattu tehtävänannon mukaan testauksen ja kattavuusraportoinnin ulkopuolelle
- `src/LICENSE`
  - ei ole varsinainen testattava ohjelmamoduuli

Lisäksi kaikkia julkisia `src/`-hakemiston tiedostoja ei testattu erillisillä suorilla testeillä. Tässä ratkaisussa keskityttiin osajoukkoon, jolla saavutettiin vaadittu kattavuustaso ja samalla löydettiin selkeitä toiminnallisia virheitä.

## 8. Löydetyt virheet ja issue-raportit

Testauksen aikana löytyi useita loogisia ja toiminnallisia virheitä kirjaston julkisista API-funktioista. Näistä on koottu valmis issue-lista tiedostoon:

- `docs/issues-to-report.md`

Raportoitavat löydökset koskevat ainakin seuraavia moduuleja:

- `src/divide.js`
- `src/clamp.js`
- `src/chunk.js`
- `src/compact.js`
- `src/defaultTo.js`
- `src/countBy.js`
- `src/camelCase.js`
- `src/eq.js`
- `src/isBuffer.js`
- `src/toString.js`

Lisää tähän palautusversioon GitHub-issueiden linkit, kun issuet on luotu julkiseen repositorioon:

- Issue 1:
- Issue 2:
- Issue 3:
- Issue 4:
- Issue 5:
- Issue 6:
- Issue 7:
- Issue 8:
- Issue 9:
- Issue 10:

Lisää myös kuvakaappaus GitHubin issue-listasta tai yksittäisistä issueista.

## 9. Lopullinen arvio kirjastosta

Nykyisellä testikattavuudella ja löydetyillä virheillä kirjasto ei ole valmis tuotantokäyttöön.

Perustelut:

- Julkisissa API-funktioissa löytyi useita selviä loogisia virheitä, esimerkiksi moduuleissa `divide`, `clamp`, `chunk` ja `compact`.
- Osa toteutuksista on ristiriidassa odotetun toiminnan tai dokumentoidun käytöksen kanssa, esimerkiksi `defaultTo`, `camelCase`, `eq` ja `toString`.
- Vaikka kattavuus on korkea, korkea kattavuus ei yksin riitä takaamaan laatua, jos testit paljastavat suoria toiminnallisia virheitä julkisissa rajapinnoissa.
- Osa kirjaston julkisista moduuleista jäi edelleen ilman erillisiä suoria testejä, joten kaikkia mahdollisia ongelmia ei ole vielä löydetty.

Yhteenvetona voidaan todeta, että kirjasto soveltuu tässä vaiheessa korkeintaan jatkokehityksen ja virheenkorjauksen kohteeksi, ei tuotantokäyttöön sellaisenaan.

## 10. Mitä palautukseen vielä liitetään GitHubista ja Coverallsista

Tähän dokumenttiin tulee ennen lopullista Moodle-palautusta lisätä vielä:

- kuvakaappaus onnistuneesta GitHub Actions -workflow-ajosta
- kuvakaappaus GitHub Actionsin testituloksista
- kuvakaappaus GitHub-issueista
- joko julkinen Coveralls-linkki tai kuvakaappaus Coveralls-raportista
- mahdollinen README-kuvakaappaus, jossa Coveralls-badge näkyy

Kun nämä ulkoiset todisteet on lisätty, dokumentti täyttää tehtävänannon raportointiosuuden.
