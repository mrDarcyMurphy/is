var is = require('../is-too')
var assert = require('assert')
var asserts = require('./asserts.js')
var skippers = ['objectCreateNull']

var greaterThanNothing = [
  'exponent',
  'floatingPointExponent',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'newBooleanTrue',
  'newDate',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
  't'
]

var greaterThanOne = [
  'exponent',
  'floatingPointExponent',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'newDate',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
]

var greaterThanNegativeOne = [
  'emptyArray',
  'emptyString',
  'exponent',
  'f',
  'floatingPointExponent',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'negativeZero',
  'negativeZeroString',
  'newArray',
  'newBooleanFalse',
  'newBooleanTrue',
  'newDate',
  'nil',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
  'positiveZero',
  'positiveZeroString',
  't',
  'whiteSpaceString',
  'zero',
  'zeroString'
]

var greaterThanOrEqualToNothing = [
  'emptyArray',
  'emptyString',
  'exponent',
  'f',
  'floatingPointExponent',
  'hexadecimal',
  'hexadecimalString',
  'infinity',
  'infinityString',
  'negativeZero',
  'negativeZeroString',
  'newArray',
  'newBooleanFalse',
  'newBooleanTrue',
  'newDate',
  'nil',
  'positiveExponent',
  'positiveFloat',
  'positiveFloatString',
  'positiveHexadecimal',
  'positiveInfinity',
  'positiveInfinityString',
  'positiveInteger',
  'positiveIntegerString',
  'positiveZero',
  'positiveZeroString',
  't',
  'whiteSpaceString',
  'zero',
  'zeroString',
  'zeroString',
]


describe('is.greaterThan', function(){

  it('nothing', function(){
    asserts.is('greaterThan', greaterThanNothing, skippers)
  })

  it('negative one `-1`', function(){
    asserts.standard('greaterThan', greaterThanNegativeOne, -1, skippers)
  })

  it('one `1`', function(){
    asserts.standard('greaterThan', greaterThanOne, 1, skippers)
  })

  it('not.greaterThan nothing', function(){
    asserts.not('greaterThan', greaterThanNothing, skippers)
  })

})


describe('is.greaterThanOrEqualTo', function(){

  it('nothing', function(){
    asserts.is('greaterThanOrEqualTo', greaterThanOrEqualToNothing, skippers)
  })

  it('not.greaterThanOrEqualTo', function(){
    asserts.not('greaterThanOrEqualTo', greaterThanOrEqualToNothing, skippers)
  })

})
