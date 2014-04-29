var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')

var strings = [
  'alphaString',
  'emptyString',
  'exponent',
  'floatingPointExponent',
  'hexadecimalString',
  'infinityString',
  'invalidHexadecimalString',
  'negativeFloatString',
  'negativeHexadecimalString',
  'negativeInfinityString',
  'negativeIntegerString',
  'negativeOneString',
  'negativeZeroString',
  'positiveFloatString',
  'positiveHexadecimalString',
  'positiveInfinityString',
  'positiveIntegerString',
  'positiveZeroString',
  'rxString',
  'whiteSpaceString',
  'zeroString'
]

var emptyStrings = [
  'emptyString',
  'whiteSpaceString'
]

describe('Strings', function(){

  it('is.string', function(){
    asserts.is('string', strings)
  })

  it('is.not.string', function(){
    asserts.not('string', strings)
  })

  it('`is.str` is an alias of `is.string`', function(){
    assert.equal(is.str, is.string)
  })

  it('is.emptyString', function(){
    asserts.is('emptyString', emptyStrings)
  })

  it('not.emptyString', function(){
    asserts.is('emptyString', emptyStrings)
  })

  it('`is.emtStr` is an alias of `is.emptyString`', function(){
    assert.equal(is.emtStr, is.emptyString)
  })

})
