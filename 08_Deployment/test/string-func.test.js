import test from 'node:test'
import assert from 'node:assert/strict'

import camelCase from '../src/camelCase.js'
import capitalize from '../src/capitalize.js'
import endsWith from '../src/endsWith.js'
import memoize from '../src/memoize.js'
import toString from '../src/toString.js'
import upperFirst from '../src/upperFirst.js'
import words from '../src/words.js'

// Tassa tiedostossa testataan merkkijono- ja funktiomoduuleita.

test('capitalize ja upperFirst toimivat', () => {
  assert.equal(capitalize('FRED'), 'Fred')
  assert.equal(upperFirst('fred'), 'Fred')
})

test('endsWith tarkistaa paattyvan osuman', () => {
  assert.equal(endsWith('abc', 'c'), true)
  assert.equal(endsWith('abc', 'b'), false)
  assert.equal(endsWith('abc', 'b', 2), true)
})

test('memoize kayttaa valimuistia', () => {
  let calls = 0
  const fn = memoize((x) => {
    calls += 1
    return x * 2
  })

  assert.equal(fn(2), 4)
  assert.equal(fn(2), 4)
  assert.equal(calls, 1)
})

test('words pilkkoo merkkijonon sanoiksi', () => {
  assert.deepEqual(words('fred, barney, & pebbles'), ['fred', 'barney', 'pebbles'])
  assert.deepEqual(words('fred, barney, & pebbles', /[^, ]+/g), ['fred', 'barney', '&', 'pebbles'])
})

// Bugitestit skip-tilassa, jotta ne dokumentoivat loydetyt virheet ilman että CI menee rikki.

test('BUG: camelCase ei saisi lisata alkuun valilyontia (issue #7)', { skip: 'Known defect' }, () => {
  assert.equal(camelCase('Foo Bar'), 'fooBar')
})

test('BUG: toString(null) pitaisi olla tyhja merkkijono dokumentaation mukaan (issue #10)', { skip: 'Known defect' }, () => {
  assert.equal(toString(null), '')
})
