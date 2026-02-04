# Dokumentointi

## Mitä tehtiin
Toteutettiin Express-pohjainen REST API, joka muuntaa heksavärin RGB-arvoiksi. Lisäksi tehtiin yksikkötestit muunnoslogiikalle ja integraatiotestit HTTP-reitille.

## Miten toteutus on rakennettu
- Muunnoslogiikka: `src/hexToRgb.js`
- REST API -reitti: `src/app.js` (GET `/api/hex-to-rgb/:hex`)
- Yksikkötestit: `test/unit/hexToRgb.test.js`
- Integraatiotestit: `test/integration/hexRoute.test.js`

## Käyttöohjeet
Asennus:
```bash
npm install
```

Käynnistys:
```bash
npm start
```

Testit:
```bash
npm test
```

## API-esimerkki
Pyyntö:
```
GET http://localhost:3000/api/hex-to-rgb/ff00aa
```

Vastaus:
```json
{ "hex": "ff00aa", "r": 255, "g": 0, "b": 170 }
```

Virheellinen heksi:
```json
{ "error": "InvalidHex" }
```

## Testien dokumentointi (PDF)
Liitä PDF-dokumenttiin:
- Kuvakaappaus `npm test` -ajosta (testitulokset).
- Kuvakaappaus REST-client/Postman -kutsusta ja vastauksesta.
- Repo-URL (tai zip-arkiston mukana PDF).

## Huomio
Projektissa on `.gitignore`, joka estää `node_modules`, `.env` ja `.DS_Store` -tiedostot versionhallinnasta.
