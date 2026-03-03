const logger = require('./logger');

// Mitä tehty: count-muuttuja säilyttää laskurin nykyisen arvon muistissa.
// Miksi näin: vaatii in-memory laskurin, ei tarvita tietokantaa.
let count = 0;

const read = () => {
  logger.info(`[COUNTER] read ${count}`);
  return count;
};

const increase = () => {
  // Mitä tehty: kasvatetaan arvoa yhdellä ja lokitetaan uusi arvo.
  // Miksi näin: increase-lokissa pitää näkyä arvo korotuksen jälkeen.
  count += 1;
  logger.info(`[COUNTER] increase ${count}`);
  return count;
};

const reset = () => {
  count = 0;
  logger.info(`[COUNTER] zeroed ${count}`);
  return count;
};

module.exports = {
  read,
  increase,
  reset,
};
