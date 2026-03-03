const fs = require('fs');
const path = require('path');
const { createLogger, transports, format } = require('winston');

// Mitä tehty: luodaan logs-kansio automaattisesti käynnistyksessä.
// Miksi näin: logger kirjoittaa tiedostoihin, joten kansio pitää olla olemassa myös puhtaassa projektissa.
const logsDir = path.join(process.cwd(), 'logs');
fs.mkdirSync(logsDir, { recursive: true });

// Mitä tehty: määritellään yksi yhteinen logger-olio koko sovellukselle.
// Miksi näin: kaikki lokit menevät samaan formaattiin ja samoihin tiedostoihin tehtävän vaatimusten mukaan.
const logger = createLogger({
  level: 'info',
  format: format.combine(format.timestamp(), format.json()),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logs/error.log', level: 'error' }),
    new transports.File({ filename: 'logs/combined.log' }),
  ],
});

module.exports = logger;
