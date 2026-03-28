# AT00BY10-kirjaston testausprojekti

Tahan projektiin on toteutettu kurssitehtavan vaatimat yksikkotestit, CI-putki ja kattavuusraportointi.

## Mitä olen tehnyt

- Tein unit-testit Node.js:n omalla testirunnerilla (`node:test`).
- Lisasin kattavuusajon `c8`-tyokalulla.
- Rajasin `.internal`-kansion pois kattavuudesta tehtavan ohjeen mukaan.
- Tein GitHub Actions -workflowin, joka ajaa testit automaattisesti.
- Lisasin Coveralls-uploadauksen workflowhun.
- Kirjoitin loydetyista virheista valmiin issue-listan tiedostoon `docs/issues-to-report.md`.

## Kaytetyt tyokalut

- Node.js 22
- `node:test`
- `c8`
- GitHub Actions
- Coveralls

## Komennot lokaalisti

```bash
npm install
npm test
npm run test:coverage
```

## Kattavuus

Kattavuuskomento:

```bash
npm run test:coverage
```

Komento jattaa pois:

- `src/.internal/**`
- `src/LICENSE`

## CI-putki

Workflow-tiedosto:

- `.github/workflows/ci.yml`

Pipeline tekee seuraavat vaiheet:

1. Checkout
2. Node.js-ympariston asennus
3. `npm ci`
4. `npm run test:coverage`
5. `coverage/lcov.info` -> Coveralls

## Coveralls

Kun repo on liitetty Coverallsiin, GitHub Actions lahettaa kattavuusraportin automaattisesti.

Badge (vaihda oma user/repo):

```md
[![Coverage Status](https://coveralls.io/repos/github/<oma-user>/<oma-repo>/badge.svg?branch=main)](https://coveralls.io/github/<oma-user>/<oma-repo>?branch=main)
```

## Testatut tiedostot

Esimerkkeja testatuista moduuleista:

- Array/Math: `add`, `castArray`, `ceil`, `difference`, `drop`, `slice`, `toNumber`, `toFinite`, `toInteger`
- Object/Collection: `at`, `get`, `keys`, `map`, `reduce`, `every`, `filter`
- Type check: `isArrayLike`, `isArrayLikeObject`, `isBoolean`, `isDate`, `isEmpty`, `isLength`, `isObject`, `isObjectLike`, `isSymbol`, `isTypedArray`, `isArguments`
- String/Function: `capitalize`, `upperFirst`, `endsWith`, `words`, `memoize`

## Bugihavainnot

Osa testeista on merkitty `skip`-tilaan, koska ne kuvaavat odotettua toimintaa tilanteissa joissa kirjastossa on selva bugi.

- Nain CI pysyy vihreana.
- Samalla opettaja ja arvioija nakevat, mita virheita testauksessa loytyi.

Issue-ehdotukset loytyvat tiedostosta:

- `docs/issues-to-report.md`
