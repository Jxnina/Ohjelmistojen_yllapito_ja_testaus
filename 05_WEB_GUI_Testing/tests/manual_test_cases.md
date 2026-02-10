# Manuaaliset testitapaukset

## RGB → Hex
- Syöte: R=64, G=128, B=192
- Odotettu: `#4080c0`

## Hex → RGB
- Syöte: `#ff8800`
- Odotettu: `rgb(255, 136, 0)`

## Validointi (RGB)
- Syöte: R=300, G=-10, B=abc
- Odotettu: API palauttaa virheen ja UI ei päivity (tarkista DevTools Network)

## Validointi (Hex)
- Syöte: `#12G999`
- Odotettu: API palauttaa virheen ja UI ei päivity

## Tyhjät kentät
- Syöte: jätä kenttä tyhjäksi ja yritä lähettää
- Odotettu: selain näyttää viestin “täytä tämä kenttä”

## Kirjaimet RGB‑kentissä
- Syöte: kirjoita kirjaimia R/G/B‑kenttiin
- Odotettu: selain näyttää viestin “syötä numero”

## Liian suuret/pienet RGB‑arvot
- Syöte: R=300 tai R=-1
- Odotettu: selain näyttää viestin “arvon pitää olla pienempi tai yhtä kuin 255” / “suurempi tai yhtä kuin 0”

## Kopioi/liitä
- Syöte: liitä hex‑arvo Hex‑kenttään (esim. `#ff8800`)
- Odotettu: arvo hyväksytään ja muunnos toimii

## Responsiivisuus
- Toiminto: pienennä selain noin 375px leveäksi
- Odotettu: asettelu pysyy luettavana, napit ja kentät näkyvät

## Saavutettavuus (Tab‑navigointi)
- Toiminto: käytä Tab‑näppäintä kenttien ja nappien välillä
- Odotettu: fokus näkyy ja kaikki kontrollit saavutetaan

## Selainyhteensopivuus
- Toiminto: avaa UI Safari‑selaimessa
- Odotettu: muunnokset toimivat ja ulkoasu on kunnossa
