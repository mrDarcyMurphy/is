var is = require('../is-too')
var assert = require('assert')
var asserts = require('./asserts.js')

describe('hexadecimal', function(){

  it('hexadecimal', function(){
    asserts.is('hexadecimal', [
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
    ], ['objectCreateNull'])
  })

  it('hexadecimalString', function(){
    asserts.is('hexadecimalString', [
      'hexadecimalString',
      'negativeHexadecimalString',
      'negativeIntegerString',
      'negativeOneString',
      'negativeZeroString',
      'negativeExponentString',
      'positiveIntegerString',
      'positiveExponentString',
      'positiveHexadecimalString',
      'positiveZeroString',
      'zeroString',
    ], ['objectCreateNull'])
  })


  it('`is.hex` is an alias of `is.hexadecimal`', function(){
    assert.equal(is.hex, is.hexadecimal)
  })

  it('`is.hexStr` is an alias of `is.hexadecimalString`', function(){
    assert.equal(is.hexStr, is.hexadecimalString)
  })

  it('`is.hexstr` is an alias of `is.hexadecimalString`', function(){
    assert.equal(is.hexstr, is.hexadecimalString)
  })

})
