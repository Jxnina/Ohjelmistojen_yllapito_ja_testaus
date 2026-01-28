# 03_Integration_Testing

Express REST API hex-to-rgb -muunnokselle, yksikkotestit ja integraatiotestit.

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

## Dokumentointi
Lisaa PDF:aan kuvakaappaus testien tuloksista (esim. `npm test` ja REST Client/Postman -kutsu).
Liita PDF:aan myos GitHub-repositorion URL (tai zip-arkiston mukana PDF).
