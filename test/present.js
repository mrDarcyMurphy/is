var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')

var presents = [
  'alphaString',
  'args',
  'emptyArray',
  'emptyObject',
  'exponent',
  'floatingPointExponent',
  'f',
  'fn',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'invalidHexadecimalString',
  'nan',
  'negativeExponent',
  'negativeFloatString',
  'negativeHexadecimal',
  'negativeHexadecimalString',
  'negativeInfinity',
  'negativeInfinityString',
  'negativeInteger',
  'negativeIntegerString',
  'negativeOne',
  'negativeOneString',
  'negativeZero',
  'negativeZeroString',
  'newArray',
  'newBooleanFalse',
  'newBooleanTrue',
  'newDate',
  'newObject',
  'newRegExp',
  'objectCreateNull',
  'objectCreateObjectPrototype',
  'objectLengthOne',
  'plainArray',
  'plainObject',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveHexadecimalString',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
  'positiveZero',
  'positiveZeroString',
  'regex',
  'rxString',
  't',
  'zero',
  'zeroString',
]

describe('Presence', function() {

  it('is.present', function(){
    asserts.is('present', presents)
  })

  it('is.not.present', function(){
    asserts.not('present', presents)
  })

  it('`is.required` is an alias of `is.present`', function() {
    assert.equal(is.required, is.present)
  })


})
