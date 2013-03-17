# is-it

A simple validation module striving for code minimalism, a clear declarative syntax, and a thorough test suite.

Pairs with [prove](https://github.com/mikefrey/prove) to for validation sugar.

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

`is.not[methodName]` will reverse the result of all the methods.

```javascript
is.not.greaterThan(1, 2) // true : 1 is not greater than 2
```

Check the tests for a full run down of how things shake down.
