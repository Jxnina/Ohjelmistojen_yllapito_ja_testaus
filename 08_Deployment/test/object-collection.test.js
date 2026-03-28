import test from 'node:test'
import assert from 'node:assert/strict'

import at from '../src/at.js'
import countBy from '../src/countBy.js'
import defaultTo from '../src/defaultTo.js'
import defaultToAny from '../src/defaultToAny.js'
import eq from '../src/eq.js'
import every from '../src/every.js'
import filter from '../src/filter.js'
import get from '../src/get.js'
import isArguments from '../src/isArguments.js'
import isArrayLike from '../src/isArrayLike.js'
import isArrayLikeObject from '../src/isArrayLikeObject.js'
import isBoolean from '../src/isBoolean.js'
import isBuffer from '../src/isBuffer.js'
import isDate from '../src/isDate.js'
import isEmpty from '../src/isEmpty.js'
import isLength from '../src/isLength.js'
import isObject from '../src/isObject.js'
import isObjectLike from '../src/isObjectLike.js'
import isSymbol from '../src/isSymbol.js'
import isTypedArray from '../src/isTypedArray.js'
import keys from '../src/keys.js'
import map from '../src/map.js'
import reduce from '../src/reduce.js'

// Tassa tiedostossa testataan object- ja collection-funktioita.
// Tarkoitus on varmistaa yleisimmat kayttotapaukset ja reunaehdot.

test('at hakee arvot annetuista poluista', () => {
  const object = { a: [{ b: { c: 3 } }, 4] }
  assert.deepEqual(at(object, ['a[0].b.c', 'a[1]']), [3, 4])
})

test('defaultTo ja defaultToAny valitsevat oletusarvon', () => {
  assert.equal(defaultTo(undefined, 10), 10)
  assert.equal(defaultTo(1, 10), 1)
  assert.equal(defaultToAny(undefined, null, 20), 20)
})

test('every tarkistaa kaikki alkiot', () => {
  assert.equal(every([true, 1, 'x'], Boolean), true)
  assert.equal(every([true, 0, 'x'], Boolean), false)
})

test('filter suodattaa alkiot predikaatilla', () => {
  assert.deepEqual(filter([1, 2, 3], (n) => n > 1), [2, 3])
})

test('get palauttaa polusta arvon tai oletusarvon', () => {
  const object = { a: [{ b: { c: 3 } }] }
  assert.equal(get(object, 'a[0].b.c'), 3)
  assert.equal(get(object, 'a.b.c', 'default'), 'default')
})

test('isArguments tunnistaa arguments-olion', () => {
  const args = (function make() {
    return arguments
  })('x')
  assert.equal(isArguments(args), true)
  assert.equal(isArguments([1, 2]), false)
})

test('array like tarkistukset toimivat', () => {
  assert.equal(isArrayLike('abc'), true)
  assert.equal(isArrayLike(() => {}), false)
  assert.equal(isArrayLikeObject([1, 2, 3]), true)
  assert.equal(isArrayLikeObject('abc'), false)
})

test('perustyyppitarkistukset toimivat', () => {
  assert.equal(isBoolean(false), true)
  assert.equal(isDate(new Date()), true)
  assert.equal(isLength(3), true)
  assert.equal(isLength(Infinity), false)
  assert.equal(isObject({}), true)
  assert.equal(isObject(null), false)
  assert.equal(isObjectLike([]), true)
  assert.equal(isObjectLike(() => {}), false)
  assert.equal(isSymbol(Symbol('x')), true)
  assert.equal(isTypedArray(new Uint8Array(2)), true)
})

test('isEmpty tunnistaa tyhjat ja ei-tyhjat arvot', () => {
  assert.equal(isEmpty(null), true)
  assert.equal(isEmpty([]), true)
  assert.equal(isEmpty([1]), false)
  assert.equal(isEmpty({}), true)
  assert.equal(isEmpty({ a: 1 }), false)
})

test('keys, map ja reduce toimivat perusdatalla', () => {
  assert.deepEqual(keys('hi'), ['0', '1'])
  assert.deepEqual(map([1, 2], (n) => n * 2), [2, 4])
  assert.equal(reduce([1, 2, 3], (sum, n) => sum + n, 0), 6)
})

// Alla bugitestit skip-tilassa samaan tapaan kuin muissa testitiedostoissa.

test('BUG: countBy:n pitaisi laskea esiintymat oikein (issue #6)', { skip: 'Known defect' }, () => {
  assert.deepEqual(countBy([6.1, 4.2, 6.3], Math.floor), { 4: 1, 6: 2 })
})

test('BUG: defaultTo:n pitaisi palauttaa oletus NaN:lle (issue #5)', { skip: 'Known defect' }, () => {
  assert.equal(defaultTo(NaN, 10), 10)
})

test('BUG: eq:n pitaisi olla tiukka vertailu string vs number (issue #8)', { skip: 'Known defect' }, () => {
  assert.equal(eq('1', 1), false)
})

test('BUG: isBufferin pitaisi tunnistaa Node Buffer (issue #9)', { skip: 'Known defect' }, () => {
  assert.equal(isBuffer(Buffer.from('a')), true)
})
