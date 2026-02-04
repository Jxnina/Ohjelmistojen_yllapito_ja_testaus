# 03_Integration_Testing

Express REST API hex-to-rgb -muunnokselle, yksikkotestit ja integraatiotestit.

## Mitä tehtiin
Rakennettiin REST API, joka muuntaa heksavärin RGB-arvoiksi, sekä toteutettiin yksikkö- ja integraatiotestit muunnoslogiikalle ja API-reitille.

## Miten tehtiin
- Muunnoslogiikka on eriytetty tiedostoon `src/hexToRgb.js`.
- REST API -reitti on määritelty tiedostossa `src/app.js` (`GET /api/hex-to-rgb/:hex`).
- Yksikkötestit löytyvät polusta `test/unit`, integraatiotestit polusta `test/integration`.

## Miksi tehtiin
Logiikan erottaminen tekee koodista testattavan ja uudelleenkäytettävän. Integraatiotesti varmistaa, että HTTP-reitti ja muunnoslogiikka toimivat yhdessä oikein.

## Asennus
npm install

## Kaynnistys
npm start

## Testit
npm test

## API
GET /api/hex-to-rgb/:hex

Esimerkki:
- http://localhost:3000/api/hex-to-rgb/ff00aa

Vastaus:
{ "hex": "ff00aa", "r": 255, "g": 0, "b": 170 }

Virheellinen heksi palauttaa 400:
{ "error": "InvalidHex" }

## REST Client / Postman
Aja REST Client -pyynto tiedostosta `rest-client.http` tai tee sama pyynto Postmanissa.

### Postman-testaus (esimerkit)
1. Kaynnista palvelin: `npm start`
2. Luo uusi `GET`-pyynto Postmanissa
3. Kutsu:
   - `http://localhost:3000/api/hex-to-rgb/ff00aa`
   - Odotettu vastaus: `200 OK` ja `{ "hex": "ff00aa", "r": 255, "g": 0, "b": 170 }`
4. Testaa virheellinen syote:
   - `http://localhost:3000/api/hex-to-rgb/zzzzzz`
   - Odotettu vastaus: `400` ja `{ "error": "InvalidHex" }`

## Dokumentointi
Lisaa PDF:aan kuvakaappaus testien tuloksista (esim. `npm test` ja REST Client/Postman -kutsu).
Liita PDF:aan myos GitHub-repositorion URL (tai zip-arkiston mukana PDF).
