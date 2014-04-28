var is = require('../is-too')
var assert = require('assert')
var asserts = require('./asserts.js')
var skippers = ['objectCreateNull']

var lessThanNothing = [
  'negativeExponent',
  'negativeFloatString',
  'negativeHexadecimal',
  'negativeInfinity',
  'negativeInfinityString',
  'negativeInteger',
  'negativeIntegerString',
  'negativeOne',
  'negativeOneString'
]

var lessThanOne = [
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

var lessThanNegativeOne = [
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

var lessThanOrEqualToNothing = [
  'emptyArray',
  'emptyString',
  'f',
  'negativeExponent',
  'negativeFloatString',
  'negativeHexadecimal',
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
  'nil',
  'positiveZero',
  'positiveZeroString',
  'whiteSpaceString',
  'zero',
  'zeroString',
]

describe('is.lessThan', function(){

  it('nothing', function(){
    asserts.is('lessThan', lessThanNothing, skippers)
  })

})

describe('is.lessThanOrEqualTo', function(){

  it('nothing', function(){
    asserts.is('lessThanOrEqualTo', lessThanOrEqualToNothing, skippers)
  })

})
