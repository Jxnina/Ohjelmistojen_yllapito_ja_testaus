# Manual test cases

## RGB → Hex
- Input: R=64, G=128, B=192
- Expected: `#4080c0` 

## Hex → RGB
- Input: `#ff8800`
- Expected: `rgb(255, 136, 0)`

## Validation (RGB)
- Input: R=300, G=-10, B=abc
- Expected: API returns error and UI does not update result (verify in DevTools network)

## Validation (Hex)
- Input: `#12G999`
- Expected: API returns error and UI does not update result
