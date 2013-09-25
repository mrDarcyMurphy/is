# is-it

A simple comparison module striving for code minimalism and a thorough test suite.

Pair `is` with [the-thing-is](https://github.com/mrDarcyMurphy/the-thing-is) for broader validation.

[![browser support](http://ci.testling.com/mrDarcyMurphy/is.png)](http://ci.testling.com/mrDarcyMurphy/is)

## Installation

```
npm install is-it
```

## Usage

```javascript
var is = require('is-it')

var metal = "666"; // |..|.  .|..|

if (is.present(metal) && is.aNumber(metal)) {
  headBang();
}
```

For now, check the source and tests for a full run down of how things work.


## Comparisons

### Operators

* `present`
* `equal`, `eq`
* `greaterThan`, `gt`
* `greaterThanOrEqualTo`, `gte`
* `lessThan`, `lt`
* `lessThanOrEqualTo`, `lte`

### Primitives

* `boolean`, `bool`
* `nil`
* `undef`

### Objects

* `object`, `obj`
* `plainObject`
* `args`
* `array`, `arr`
* `func`

### Strings

* `string`, `str`
* `emptyString`, `emtStr`

### Numbers

* `number`, `num`
* `aNumber`, `aNum`
* `integer`, `int`
* `aInteger`, `aInt`
* `zero`
* `aZero`

### Dates

* `date`
* `sameDate`
* `today`
* `futureDate`, `future`
* `pastDate`, `past`

### Antonyms

`is.not[methodName]` will return the inverse all methods.

```javascript
is.not.greaterThan(1, 2) // true : 1 is not greater than 2
```

## Helpers

* `toInteger`, `toInt`: converts a number to an integer, and `NaN` to `null` because you can do math with `null`.
* `toNumber`, `toNum`: same, but respects decimals.
