var assert = require('assert')
var is = require('../lib/is')

describe('strings', function(){

  it('string', function(){
    var fn = function(){}
    assert.equal(false, is.string(fn))
    assert.equal(false, is.string(new Date()))
    assert.equal(false, is.string(undefined))
    assert.equal(false, is.string(NaN))
    assert.equal(false, is.string(null))
    assert.equal(false, is.string(true))
    assert.equal(false, is.string(false))
    assert.equal(false, is.string({}))
    assert.equal(false, is.string([]))
    assert.equal(true,  is.string(""))
    assert.equal(true,  is.string("   "))
    assert.equal(true,  is.string("asdf"))
    assert.equal(false, is.string(1.23))
    assert.equal(false, is.string(-42))
    assert.equal(false, is.string(-1))
    assert.equal(false, is.string(0))
    assert.equal(false, is.string(666)) // :metal:
  })

  it('emptyString', function(){
    var fn = function(){}
    assert.equal(false, is.emptyString(fn))
    assert.equal(false, is.emptyString(new Date()))
    assert.equal(false, is.emptyString(undefined))
    assert.equal(false, is.emptyString(NaN))
    assert.equal(false, is.emptyString(null))
    assert.equal(false, is.emptyString(true))
    assert.equal(false, is.emptyString(false))
    assert.equal(false, is.emptyString({}))
    assert.equal(false, is.emptyString([]))
    assert.equal(true,  is.emptyString(""))
    assert.equal(true,  is.emptyString("  "))
    assert.equal(false, is.emptyString("asdf"))
    assert.equal(false, is.emptyString(1.23))
    assert.equal(false, is.emptyString(-42))
    assert.equal(false, is.emptyString(-1))
    assert.equal(false, is.emptyString(0))
    assert.equal(false, is.emptyString(666)) // :metal:
  })

})
