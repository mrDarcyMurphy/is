var is = require('../is-too')
var assert = require('assert')
var asserts = require('./asserts.js')

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

  it('is.aInteger', function(){
    asserts.is('aInteger', [
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

  it('is.not.aInteger', function(){
    asserts.not('aInteger', [
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

  it('aInt is an alias of aInteger', function(){
    assert.equal(is.aInteger, is.aInt)
  })

})
