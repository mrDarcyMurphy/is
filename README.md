# is-it

A simple validation module striving for code minimalism, a clear declarative syntax, and a thorough test suite.

Pairs with [prove](https://github.com/mikefrey/prove) for validation sugar.

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


## Types of Validations


### Operators

* `equal`, `eq`
* `greaterThan`, `gt`
* `greaterThanOrEqualTo`, `gte`
* `lessThan`, `lt`
* `lessThanOrEqualTo`, `lte`


### Primitives

* `array`, `arr`
* `boolean`, `bool`
* `func`
* `nil`
* `undef`
* `present`


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
