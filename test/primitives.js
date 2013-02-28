var assert = require('assert')
var is = require('../lib/is')

describe('primitives', function(){

  it('#zero', function(){
    var fn = function(){}
    assert.equal(false, is.zero(fn))
    assert.equal(false, is.zero(new Date))
    assert.equal(false, is.zero(undefined))
    assert.equal(false, is.zero(NaN))
    assert.equal(false, is.zero(null))
    assert.equal(false, is.zero(true))
    assert.equal(false, is.zero(false))
    assert.equal(false, is.zero({}))
    assert.equal(false, is.zero([]))
    assert.equal(false, is.zero(""))
    assert.equal(false, is.zero("   "))
    assert.equal(false, is.zero("asdf"))
    assert.equal(false, is.zero(1.23))
    assert.equal(false, is.zero(-42))
    assert.equal(false, is.zero(-1))
    assert.equal(true,  is.zero(0))
    assert.equal(false, is.zero(666)) // :metal:
  })

  it('#string', function(){
    var fn = function(){}
    assert.equal(false, is.string(fn))
    assert.equal(false, is.string(new Date))
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

  it('#not', function(){
    var fn = function(){}
    assert.equal(false, is.not(fn))
    assert.equal(false, is.not(new Date))
    assert.equal(true,  is.not(undefined))
    assert.equal(false, is.not(NaN))
    assert.equal(true,  is.not(null))
    assert.equal(false, is.not(true))
    assert.equal(false, is.not(false))
    assert.equal(false, is.not({}))
    assert.equal(false, is.not([]))
    assert.equal(false, is.not(""))
    assert.equal(false, is.not("  "))
    assert.equal(false, is.not("asdf"))
    assert.equal(false, is.not(1.23))
    assert.equal(false, is.not(-42))
    assert.equal(false, is.not(-1))
    assert.equal(false, is.not(0))
    assert.equal(false, is.not(666)) // :metal:
  })

})
