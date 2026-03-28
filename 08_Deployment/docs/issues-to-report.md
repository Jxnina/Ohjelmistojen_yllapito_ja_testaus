# Suggested issue reports

Below are concrete defect candidates found during testing.

## 1) divide returns wrong result

- File: `src/divide.js`
- Current behavior: `divide(6, 4)` returns `1`
- Expected behavior: `divide(6, 4)` should return `1.5`
- Notes: implementation divides `divisor / divisor` instead of `dividend / divisor`.

## 2) clamp clamps to lower bound incorrectly

- File: `src/clamp.js`
- Current behavior: `clamp(10, -5, 5)` returns `-5`
- Expected behavior: should return `5`
- Notes: comparison logic appears inverted.

## 3) chunk output is incorrect for normal chunking

- File: `src/chunk.js`
- Current behavior: `chunk(['a', 'b', 'c', 'd'], 2)` returns malformed output
- Expected behavior: should return `[['a', 'b'], ['c', 'd']]`
- Notes: result index is not incremented during loop.

## 4) compact drops valid values

- File: `src/compact.js`
- Current behavior: output misses value `1` and includes unusual index usage
- Expected behavior: `compact([0, 1, false, 2, '', 3])` should return `[1, 2, 3]`
- Notes: result write index starts from `-1`.

## 5) defaultTo does not treat NaN as missing value

- File: `src/defaultTo.js`
- Current behavior: `defaultTo(NaN, 10)` returns `NaN`
- Expected behavior from docs: should return default value `10`
- Notes: docs mention NaN should use default, implementation only checks null/undefined.

## 6) countBy starts counts from zero

- File: `src/countBy.js`
- Current behavior: `countBy([6.1, 4.2, 6.3], Math.floor)` returns `{4: 0, 6: 1}`
- Expected behavior: should return `{4: 1, 6: 2}`
- Notes: first occurrence is initialized with `0` instead of `1`.

## 7) camelCase output starts with extra leading space

- File: `src/camelCase.js`
- Current behavior: `camelCase('Foo Bar')` returns `' fooBar'`
- Expected behavior: should return `'fooBar'`
- Notes: reducer initial value is `' '`.

## 8) eq uses loose equality

- File: `src/eq.js`
- Current behavior: `eq('1', 1)` returns `true`
- Expected behavior: should return `false` for values with different types
- Notes: function uses `==` instead of strict equality.

## 9) isBuffer does not detect Node Buffer

- File: `src/isBuffer.js`
- Current behavior: `isBuffer(Buffer.from('a'))` returns `false`
- Expected behavior: should return `true`
- Notes: environment detection likely fails in ESM context.

## 10) toString(null) behavior conflicts with docs

- File: `src/toString.js`
- Current behavior: `toString(null)` returns `'null'`
- Expected behavior from docs: should return empty string `''`
- Notes: implementation does not special-case `null`/`undefined`.
