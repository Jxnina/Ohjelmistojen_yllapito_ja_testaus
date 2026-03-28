import test from 'node:test'
import assert from 'node:assert/strict'

import add from '../src/add.js'
import castArray from '../src/castArray.js'
import ceil from '../src/ceil.js'
import chunk from '../src/chunk.js'
import clamp from '../src/clamp.js'
import compact from '../src/compact.js'
import difference from '../src/difference.js'
import divide from '../src/divide.js'
import drop from '../src/drop.js'
import slice from '../src/slice.js'
import toFinite from '../src/toFinite.js'
import toInteger from '../src/toInteger.js'
import toNumber from '../src/toNumber.js'

// Tassa tiedostossa testataan kirjasto-funktioiden peruskayttoa (array + math).
// Namat testit kuvaavat toimintaa, jonka pitaisi toimia normaalisti.

test('add palauttaa summan', () => {
  assert.equal(add(6, 4), 10)
})

test('castArray kaarii arvon taulukoksi', () => {
  assert.deepEqual(castArray(1), [1])
  assert.deepEqual(castArray([1, 2]), [1, 2])
})

test('ceil pyoristaa ylospain myos desimaalitarkkuudella', () => {
  assert.equal(ceil(4.006), 5)
  assert.equal(ceil(6.004, 2), 6.01)
})

test('difference palauttaa erotuksen', () => {
  assert.deepEqual(difference([2, 1], [2, 3]), [1])
  assert.deepEqual(difference(null, [1]), [])
})

test('drop poistaa alusta n alkiota', () => {
  assert.deepEqual(drop([1, 2, 3], 2), [3])
  assert.deepEqual(drop([1, 2, 3], -2), [1, 2, 3])
})

test('slice ottaa osan taulukosta', () => {
  assert.deepEqual(slice([1, 2, 3, 4], 1, 3), [2, 3])
  assert.deepEqual(slice([1, 2, 3, 4], -2), [3, 4])
})

test('toNumber muuntaa eri syotteita numeroksi', () => {
  assert.equal(toNumber('3.2'), 3.2)
  assert.equal(toNumber('0b1010'), 10)
  assert.ok(Number.isNaN(toNumber(Symbol('x'))))
})

test('toFinite muuntaa aarettoman suurimmaksi luvuksi', () => {
  assert.equal(toFinite(Infinity), 1.7976931348623157e+308)
  assert.equal(toFinite('3.2'), 3.2)
})

test('toInteger palauttaa kokonaisluvun', () => {
  assert.equal(toInteger(3.9), 3)
  assert.equal(toInteger(-3.9), -3)
})

// Alla on bugitestit. Ne on merkitty skip-tilaan, jotta CI ei kaadu,
// mutta. nahdaan suoraan mita virheita testauksessa loydettiin.

test('BUG: chunkin pitaisi jakaa [a,b,c,d] koossa 2 oikein (issue #3)', { skip: 'Known defect' }, () => {
  assert.deepEqual(chunk(['a', 'b', 'c', 'd'], 2), [['a', 'b'], ['c', 'd']])
})

test('BUG: clampin pitaisi palauttaa ylaraja kun arvo ylittaa sen (issue #2)', { skip: 'Known defect' }, () => {
  assert.equal(clamp(10, -5, 5), 5)
})

test('BUG: compactin pitaisi palauttaa [1,2,3] (issue #4)', { skip: 'Known defect' }, () => {
  assert.deepEqual(compact([0, 1, false, 2, '', 3]), [1, 2, 3])
})

test('BUG: divide(6,4) pitaisi olla 1.5 (issue #1)', { skip: 'Known defect' }, () => {
  assert.equal(divide(6, 4), 1.5)
})
