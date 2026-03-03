const logger = require('./logger');

// Mitä tehty: kirjoitetaan esimerkkilokit suoraan metodeilla info/warn/error.
// Miksi näin: tämä on selkein tapa vs kaksi rinnakkaista syntaksia.
logger.info('This is an informational message.');
logger.warn('This is a warning message.');
logger.error('This is an error message.');
