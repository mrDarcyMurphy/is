var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')

var numbers = [
  'hexadecimal',
  'infinity',
  'negativeFloat',
  'negativeHexadecimal',
  'negativeInfinity',
  'negativeInteger',
  'negativeOne',
  'negativeZero',
  'negativeExponent',
  'positiveFloat',
  'positiveInteger',
  'positiveInfinity',
  'positiveExponent',
  'positiveHexadecimal',
  'positiveZero',
  'zero',
]

var numberStrings = [
  'exponent',
  'floatingPointExponent',
  'hexadecimalString',
  'infinityString',
  'negativeHexadecimalString',
  'negativeFloatString',
  'negativeInfinityString',
  'negativeIntegerString',
  'negativeOneString',
  'negativeZeroString',
  'negativeExponentString',
  'positiveHexadecimalString',
  'positiveFloatString',
  'positiveInfinityString',
  'positiveIntegerString',
  'positiveOneString',
  'positiveZeroString',
  'positiveExponentString',
  'zeroString'
]

var zeroes = [
  'negativeZero',
  'positiveZero',
  'zero'
]

var zeroStrings = [
  'negativeZeroString',
  'positiveZeroString',
  'zeroString'
]

describe('numbers', function(){

  it('is.number', function(){
    asserts.is('number', numbers)
  })

  it('is.not.number', function(){
    asserts.not('number', numbers)
  })

  it('`is.num` is an alias of `is.number`', function(){
    assert.equal(is.num, is.number)
  })

  it('is.numberString', function(){
    asserts.is('numberString', numberStrings)
  })

  it('is.not.numberString', function(){
    asserts.not('numberString', numberStrings)
  })

  it('`is.numstr` is an alias of `is.numberString`', function(){
    assert.equal(is.numstr, is.numberString)
  })

  it('is.zero', function(){
    asserts.is('zero', zeroes)
  })

  it('is.not.zero', function(){
    asserts.not('zero', zeroes)
  })

  it('is.zeroString', function(){
    asserts.is('zeroString', zeroStrings)
  })

  it('is.not.zeroString', function(){
    asserts.not('zeroString', zeroStrings)
  })

})
