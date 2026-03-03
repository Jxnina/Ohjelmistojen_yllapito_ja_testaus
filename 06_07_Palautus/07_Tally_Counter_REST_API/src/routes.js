const express = require('express');
const logger = require('./logger');
const counter = require('./counter');

const app = express();

// Mitä tehty: reitit kirjoittavat ensin [ENDPOINT]-lokin ja kutsuvat sitten counter-funktiota.
// Miksi näin: lokista näkyy selvästi mikä URL kutsuttiin, ja varsinainen laskurilogiikka pysyy erillään.
app.get('/counter-increase', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-increase'");
  const count = counter.increase();
  res.json({ count });
});

app.get('/counter-read', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-read'");
  const count = counter.read();
  res.json({ count });
});

app.get('/counter-reset', (req, res) => {
  logger.info("[ENDPOINT] GET '/counter-reset'");
  const count = counter.reset();
  res.json({ count });
});

module.exports = app;
