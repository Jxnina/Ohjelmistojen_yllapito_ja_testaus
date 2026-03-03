const fs = require('fs');
const path = require('path');
const { createLogger, transports, format } = require('winston');

// Mitä tehty: luodaan logs-kansio automaattisesti käynnistyksessä.
// Miksi näin: tiedostotransportit tarvitsevat valmiin kohdekansion, muuten lokien kirjoitus voi epäonnistua.
const logsDir = path.join(process.cwd(), 'logs');
fs.mkdirSync(logsDir, { recursive: true });

// Mitä tehty: tehdään yksi yhteinen logger mainille, routeille ja counterille.
// Miksi näin: lokit pysyvät samanlaisina koko sovelluksessa ja vaaditut lokitiedostot täyttyvät.
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
