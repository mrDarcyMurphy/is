var is = require('../lib/is')
var assert = require('assert')
var asserts = require('./asserts.js')

var skippers = ['objectCreateNull']

var greaterThanNothing = [ 'newDate', 't', 'newBooleanTrue', 'positiveFloatString', 'positiveIntegerString', 'positiveFloat', 'positiveInteger', 'exponent', 'positiveExponent', 'hexadecimal', 'positiveHexadecimal', 'infinity', 'positiveInfinity', 'infinityString', 'positiveInfinityString', 'hexadecimalString', 'floatingPointExponent' ]
var greaterThanOne = ['newDate', 'positiveFloatString', 'positiveIntegerString', 'positiveFloat', 'positiveInteger', 'exponent', 'positiveExponent', 'infinity', 'positiveInfinity', 'infinityString', 'positiveInfinityString', 'hexadecimal', 'hexadecimalString', 'positiveHexadecimal', 'floatingPointExponent']
var greaterThanNegativeOne = [ 'newDate', 'nil', 't', 'f', 'newBooleanTrue', 'newBooleanFalse', 'newArray', 'emptyArray', 'emptyString', 'whiteSpaceString', 'zeroString', 'negativeZero', 'zero', 'positiveZero', 'negativeZeroString', 'positiveZeroString', 'positiveFloatString', 'positiveIntegerString', 'positiveFloat', 'positiveInteger', 'exponent', 'positiveExponent', 'hexadecimal', 'positiveHexadecimal', 'infinity', 'positiveInfinity', 'infinityString', 'positiveInfinityString', 'hexadecimalString', 'floatingPointExponent' ]
var greaterThanOrEqualToNothing = [ 'newDate', 'nil', 't', 'f', 'newBooleanTrue', 'newBooleanFalse', 'newArray', 'emptyArray', 'emptyString', 'whiteSpaceString', 'zeroString', 'negativeZero', 'zero', 'positiveZero', 'negativeZeroString', 'zeroString', 'positiveZeroString', 'positiveFloatString', 'positiveIntegerString', 'positiveFloat', 'positiveInteger', 'exponent', 'positiveExponent', 'hexadecimal', 'positiveHexadecimal', 'infinity', 'positiveInfinity', 'infinityString', 'positiveInfinityString', 'hexadecimalString', 'floatingPointExponent' ]


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
