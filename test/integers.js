var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')

describe('Integers', function(){

  it('is.integer', function(){
    asserts.is('integer', [
      'hexadecimal',
      'negativeHexadecimal',
      'negativeInteger',
      'negativeOne',
      'negativeZero',
      'negativeExponent',
      'positiveInteger',
      'positiveExponent',
      'positiveHexadecimal',
      'positiveZero',
      'zero',
    ])
  })

  it('is.not.integer', function(){
    asserts.not('integer', [
      'hexadecimal',
      'negativeHexadecimal',
      'negativeInteger',
      'negativeOne',
      'negativeZero',
      'negativeExponent',
      'positiveInteger',
      'positiveExponent',
      'positiveHexadecimal',
      'positiveZero',
      'zero',
    ])
  })

  it('is.int is an alias of is.integer', function(){
    assert.equal(is.integer, is.int)
  })

})

describe('Interger Strings', function(){

  it('is.integerString', function(){
    asserts.is('integerString', [
      'exponent',
      'negativeIntegerString',
      'negativeOneString',
      'negativeZeroString',
      'negativeExponentString',
      'positiveIntegerString',
      'positiveZeroString',
      'zeroString',
    ])
  })

  it('is.not.integerString', function(){
    asserts.not('integerString', [
      'exponent',
      'negativeIntegerString',
      'negativeOneString',
      'negativeZeroString',
      'negativeExponentString',
      'positiveIntegerString',
      'positiveZeroString',
      'zeroString',
    ])
  })

  it('aInt is an alias of integerString', function(){
    assert.equal(is.integerString, is.aInt)
  })

})
