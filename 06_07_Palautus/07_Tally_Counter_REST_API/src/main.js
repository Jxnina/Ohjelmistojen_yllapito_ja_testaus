const app = require('./routes');
const logger = require('./logger');

const PORT = process.env.PORT || 3000;

// Mitä tehty: kun palvelin alkaa kuunnella porttia, kirjoitetaan [MAIN] Starting.
// Miksi näin: vaatii pääohjelman käynnistyslokin, jotta sovelluksen tila näkyy lokista.
const server = app.listen(PORT, () => {
  logger.info('[MAIN] Starting');
});

const shutdown = () => {
  // Mitä tehty: käsitellään hallittu lopetus ja kirjoitetaan [MAIN] Stopping.
  // Miksi näin: lopetusloki näyttää, että sovellus suljettiin normaalisti eikä kaatunut.
  logger.info('[MAIN] Stopping');
  server.close(() => process.exit(0));
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
