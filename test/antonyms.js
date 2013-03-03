var assert = require('assert')
var is = require('../lib/is')
var isnt = is.isnt

var fn = function(){}

describe('isnt', function(){

  // don't need to test quite everything...
  it('has no toNumber', function(){
    assert.equal(isnt.toNumber, undefined)
  })
  it('has no toInteger', function(){
    assert.equal(isnt.toInteger, undefined)
  })
  it('aZero', function(){
    assert.equal(false, isnt.aZero(0))
    assert.equal(false, isnt.aZero("0"))
    assert.equal(true, isnt.aZero("nope"))
  })
  it('aInt', function(){
    assert.equal(false, isnt.aInt(1))
    assert.equal(false, isnt.aInt("1"))
    assert.equal(true, isnt.aInt("nope"))
  })
  it('aPositiveInteger', function(){
    assert.equal(false, isnt.aPositiveInteger(1))
    assert.equal(false, isnt.aPositiveInteger("1"))
    assert.equal(true, isnt.aPositiveInteger("nope"))
  })
  it('aNegativeInteger', function(){
    assert.equal(false, isnt.aNegativeInteger(-1))
    assert.equal(false, isnt.aNegativeInteger("-1"))
    assert.equal(true, isnt.aNegativeInteger("nope"))
  })
  it('integer', function(){
    assert.equal(false, isnt.integer(1))
    assert.equal(true, isnt.integer("1"))
  })
  it('positiveInteger', function(){
    assert.equal(false, isnt.positiveInteger(1))
    assert.equal(true, isnt.positiveInteger(-1))
  })
  it('negativeInteger', function(){
    assert.equal(false, isnt.negativeInteger(-1))
    assert.equal(true, isnt.negativeInteger(1))
  })
  it('zero', function(){
    assert.equal(false, isnt.zero(0))
    assert.equal(true, isnt.zero("0"))
  })
  it('string', function(){
    assert.equal(false, isnt.string("yes"))
    assert.equal(true, isnt.string(1))
  })
  it('emptyString', function(){
    assert.equal(false, isnt.emptyString(""))
    assert.equal(true, isnt.emptyString("nope"))
  })


})
