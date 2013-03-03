var assert = require('assert')
var is = require('../lib/is')
var isnt = is.isnt

var fn = function(){}

describe('isnt', function(){

  // don't need to test quite everything...
  it('has no toNumber', function(){
    assert.equal(is.not.toNumber, undefined)
  })
  it('has no toInteger', function(){
    assert.equal(is.not.toInteger, undefined)
  })
  it('aZero', function(){
    assert.equal(false, is.not.aZero(0))
    assert.equal(false, is.not.aZero("0"))
    assert.equal(true,  is.not.aZero("nope"))
  })
  it('aInt', function(){
    assert.equal(false, is.not.aInt(1))
    assert.equal(false, is.not.aInt("1"))
    assert.equal(true,  is.not.aInt("nope"))
  })
  it('aPositiveInteger', function(){
    assert.equal(false, is.not.aPositiveInteger(1))
    assert.equal(false, is.not.aPositiveInteger("1"))
    assert.equal(true,  is.not.aPositiveInteger("nope"))
  })
  it('aNegativeInteger', function(){
    assert.equal(false, is.not.aNegativeInteger(-1))
    assert.equal(false, is.not.aNegativeInteger("-1"))
    assert.equal(true,  is.not.aNegativeInteger("nope"))
  })
  it('integer', function(){
    assert.equal(false, is.not.integer(1))
    assert.equal(true,  is.not.integer("1"))
  })
  it('positiveInteger', function(){
    assert.equal(false, is.not.positiveInteger(1))
    assert.equal(true,  is.not.positiveInteger(-1))
  })
  it('negativeInteger', function(){
    assert.equal(false, is.not.negativeInteger(-1))
    assert.equal(true,  is.not.negativeInteger(1))
  })
  it('zero', function(){
    assert.equal(false, is.not.zero(0))
    assert.equal(true,  is.not.zero("0"))
  })
  it('string', function(){
    assert.equal(false, is.not.string("yes"))
    assert.equal(true,  is.not.string(1))
  })
  it('emptyString', function(){
    assert.equal(false, is.not.emptyString(""))
    assert.equal(true,  is.not.emptyString("nope"))
  })


})
