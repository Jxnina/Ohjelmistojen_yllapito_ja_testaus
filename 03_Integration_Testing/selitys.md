Sisältää projektin lyhyen kuvauksen, asennus- ja käynnistysohjeet, testien ajon, API-reitin esimerkin sekä ohjeen REST‑client/Postman‑testaukseen ja PDF‑dokumentointiin. Tarkoitus on ohjata käyttäjää käyttämään ja arvioijaa tarkistamaan työ.

package.json
Määrittelee Node‑projektin metatiedot, komennot (npm start, npm test) sekä riippuvuudet (Express) ja dev‑riippuvuudet (mocha, chai, supertest). Tarvitaan asennusta ja testien ajoa varten.

server.js
Käynnistää Express‑sovelluksen kuuntelemaan porttia (oletus 3000). Erotettu app.js:stä, jotta sovellus voidaan testata ilman että se kuuntelee porttia testien aikana.

app.js
Luo Express‑sovelluksen ja määrittää API‑reitin /api/hex-to-rgb/:hex. Reitti kutsuu hexToRgb‑funktiota, palauttaa JSON‑vastauksen onnistuneessa tapauksessa ja 400‑virheen virheellisessä syötteessä. Tämä on varsinaisen REST‑API:n ydin.

hexToRgb.js
Sisältää hexToRgb‑funktion. Se validoi syötteen (3 tai 6 heksamerkkiä, optional #), normalisoi 3‑merkkisen muotoon 6‑merkkinen ja muuntaa RGB‑arvoiksi. Heittää virheen jos syöte on virheellinen. Tällä eriytetään logiikka testattavaksi.

hexToRgb.test.js
Yksikkötestit hexToRgb‑funktiolle: oikea muunnos 6‑merkkiselle, 3‑merkkiselle ja virheellinen syöte. Varmistaa että puhdas logiikka toimii.

hexRoute.test.js
Integraatiotestit API‑reitille GET /api/hex-to-rgb/:hex. Käyttää supertest‑kirjastoa ja testaa sekä onnistuneen että virheellisen HTTP‑vastauksen. Varmistaa reitin ja logiikan yhteispelin.

rest-client.http
Valmiit REST Client ‑pyynnöt (VS Code) onnistuneelle, 3‑merkkiselle ja virheelliselle heksille.

03_Integration_Testing/.gitignore
Estää tarpeettomien tai arkaluonteisten tiedostojen (node_modules, .env, .DS_Store) versionhallintaan päätymisen. Tämä on myös yksi arviointikriteereistä.