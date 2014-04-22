var is = require('../lib/is')
var assert = require('assert')
var asserts = require('./asserts.js')

var skippers = ['objectCreateNull']

var one = ['newDate', 'positiveFloatString', 'positiveIntegerString', 'positiveFloat', 'positiveInteger', 'exponent', 'positiveExponent', 'infinity', 'positiveInfinity', 'infinityString', 'positiveInfinityString']
var negativeOne = [ 'newDate', 'nil', 't', 'f', 'newBooleanTrue', 'newBooleanFalse', 'newArray', 'emptyArray', 'emptyString', 'whiteSpaceString', 'zeroString', 'negativeZero', 'zero', 'positiveZero', 'negativeZeroString', 'positiveZeroString', 'positiveFloatString', 'positiveIntegerString', 'positiveFloat', 'positiveInteger', 'exponent', 'positiveExponent', 'hexadecimal', 'positiveHexadecimal', 'infinity', 'positiveInfinity', 'infinityString', 'positiveInfinityString' ]
var greaterThanNothing = [ 'newDate', 't', 'newBooleanTrue', 'positiveFloatString', 'positiveIntegerString', 'positiveFloat', 'positiveInteger', 'exponent', 'positiveExponent', 'hexadecimal', 'positiveHexadecimal', 'infinity', 'positiveInfinity', 'infinityString', 'positiveInfinityString' ]
var greaterThanOrEqualToNothing = [ 'newDate', 'nil', 't', 'f', 'newBooleanTrue', 'newBooleanFalse', 'newArray', 'emptyArray', 'emptyString', 'whiteSpaceString', 'zeroString', 'negativeZero', 'zero', 'positiveZero', 'negativeZeroString', 'zeroString', 'positiveZeroString', 'positiveFloatString', 'positiveIntegerString', 'positiveFloat', 'positiveInteger', 'exponent', 'positiveExponent', 'hexadecimal', 'positiveHexadecimal', 'infinity', 'positiveInfinity', 'infinityString', 'positiveInfinityString' ]


describe('is.greaterThan', function(){

  it('nothing', function(){
    asserts.is('greaterThan', greaterThanNothing, skippers)
  })

  it('negative one `-1`', function(){
    asserts.standard('greaterThan', negativeOne, -1, skippers)
  })

  it('one `1`', function(){
    asserts.standard('greaterThan', one, 1, skippers)
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
