const assert = require('assert');
const counter = require('../src/counter');

describe('Counter', () => {
  beforeEach(() => {
    counter.reset();
  });

  it('reads 0 after reset', () => {
    const value = counter.read();
    assert.strictEqual(value, 0);
  });

  it('increases the counter by one', () => {
    const value = counter.increase();
    assert.strictEqual(value, 1);
    assert.strictEqual(counter.read(), 1);
  });

  it('resets counter to zero', () => {
    counter.increase();
    counter.increase();
    const value = counter.reset();

    assert.strictEqual(value, 0);
    assert.strictEqual(counter.read(), 0);
  });
});
