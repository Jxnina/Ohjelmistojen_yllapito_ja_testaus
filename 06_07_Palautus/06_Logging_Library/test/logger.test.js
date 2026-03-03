const assert = require('assert');
const fs = require('fs');
const path = require('path');
const logger = require('../src/logger');

const errorLogPath = path.join(process.cwd(), 'logs', 'error.log');
const combinedLogPath = path.join(process.cwd(), 'logs', 'combined.log');

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

describe('Logger configuration', () => {
  it('uses info level and three transports', () => {
    assert.strictEqual(logger.level, 'info');
    assert.strictEqual(logger.transports.length, 3);
  });

  it('has error file transport and combined file transport', () => {
    const fileTransports = logger.transports.filter((transport) => transport.filename);
    const filenames = fileTransports.map((transport) => path.basename(transport.filename));

    assert.ok(filenames.includes('error.log'));
    assert.ok(filenames.includes('combined.log'));
  });
});

describe('Logger output', () => {
  beforeEach(() => {
    if (fs.existsSync(errorLogPath)) fs.writeFileSync(errorLogPath, '');
    if (fs.existsSync(combinedLogPath)) fs.writeFileSync(combinedLogPath, '');
  });

  it('writes error logs to error.log', async () => {
    logger.error('Task1 test error entry');
    await wait(100);

    const errorContent = fs.readFileSync(errorLogPath, 'utf8');
    assert.ok(errorContent.includes('Task1 test error entry'));
  });

  it('writes all levels to combined.log', async () => {
    logger.info('Task1 test info entry');
    logger.warn('Task1 test warn entry');
    logger.error('Task1 test error entry for combined');
    await wait(100);

    const combinedContent = fs.readFileSync(combinedLogPath, 'utf8');
    assert.ok(combinedContent.includes('Task1 test info entry'));
    assert.ok(combinedContent.includes('Task1 test warn entry'));
    assert.ok(combinedContent.includes('Task1 test error entry for combined'));
  });
});
