# Dokumentaatio: Markdown → HTML -tehtävä

## Tehtävän tavoite

Tehtävän tarkoituksena oli luoda helposti luettava Markdown-dokumentti
vapaavalintaisesta aiheesta ja muuntaa se HTML-muotoon.

## Markdown-dokumentin tekeminen

Loin Markdown-tiedoston nimeltä `osoittimet.md`.
Dokumentti sisältää:
- pääotsikon
- väliotsikoita
- tekstikappaleita
- esimerkkikoodin C++-kielestä

Markdown kon kirjoitettu selkeässä ja helppolukuisessa muodossa.

## Markdownin muuntaminen HTML-muotoon

Muuntaakseni Markdown-dokumentin HTML:ksi käytin **Pandoc**-työkalua
terminaalissa.

### Pandocin asentaminen

Pandoc asennettiin macOS-järjestelmään käyttäen **Homebrew**-paketinhallintaa.
Asennus tehtiin terminaalissa seuraavalla komennolla:

```bash
brew install pandoc
```
### Muuntaminen HTML-muotoon

Markdown-dokumentin muunnettiin HTML:ksi seuraavalla komennolla:

```bash
pandoc osoittimet.md -o osoittimet.html --standalone --metadata lang=fi
```

--standalone: Pandoc tekee "valmiin" HTML-sivun, eli luo perusrakenteen HTML-dokumentille ja lisää myös perus-CSS:n.
--metadata lang=fi: Asettaa sivun kieleksi suomen.

