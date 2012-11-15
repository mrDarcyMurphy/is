var assert = require('assert')
var is = require('../lib/is')

describe('numbers', function(){

  it('#integer', function(){
    var fn = function(){}
    assert.equal(false, is.integer(fn))
    assert.equal(false, is.integer(new Date))
    assert.equal(false, is.integer(undefined))
    assert.equal(false, is.integer(NaN))
    assert.equal(false, is.integer(null))
    assert.equal(false, is.integer(true))
    assert.equal(false, is.integer(false))
    assert.equal(false, is.integer({}))
    assert.equal(false, is.integer([]))
    assert.equal(false, is.integer(""))
    assert.equal(false, is.integer("asdf"))
    assert.equal(false, is.integer(1.23))
    assert.equal(true, is.integer(-42))
    assert.equal(true,  is.integer(-1))
    assert.equal(true,  is.integer(0))
    assert.equal(true,  is.integer(666))
  })

  it('#int', function(){
    var fn = function(){}
    assert.equal(false, is.int(fn))
    assert.equal(false, is.int(new Date))
    assert.equal(false, is.int(undefined))
    assert.equal(false, is.int(NaN))
    assert.equal(false, is.int(null))
    assert.equal(false, is.int(true))
    assert.equal(false, is.int(false))
    assert.equal(false, is.int({}))
    assert.equal(false, is.int([]))
    assert.equal(false, is.int(""))
    assert.equal(false, is.int("asdf"))
    assert.equal(false, is.int(1.23))
    assert.equal(true, is.int(-42))
    assert.equal(true,  is.int(-1))
    assert.equal(true,  is.int(0))
    assert.equal(true,  is.int(666)) // :metal:
  })

  it('#positiveInteger', function(){
    var fn = function(){}
    assert.equal(false, is.positiveInteger(fn))
    assert.equal(false, is.positiveInteger(new Date))
    assert.equal(false, is.positiveInteger(undefined))
    assert.equal(false, is.positiveInteger(NaN))
    assert.equal(false, is.positiveInteger(null))
    assert.equal(false, is.positiveInteger(true))
    assert.equal(false, is.positiveInteger(false))
    assert.equal(false, is.positiveInteger({}))
    assert.equal(false, is.positiveInteger([]))
    assert.equal(false, is.positiveInteger(""))
    assert.equal(false, is.positiveInteger("asdf"))
    assert.equal(false, is.positiveInteger(1.23))
    assert.equal(false, is.positiveInteger(-42))
    assert.equal(false, is.positiveInteger(-1))
    assert.equal(false, is.positiveInteger(0))
    assert.equal(true,  is.positiveInteger(666)) // :metal:
  })

  it('#posInt', function(){
    var fn = function(){}
    assert.equal(false, is.posInt(fn))
    assert.equal(false, is.posInt(new Date))
    assert.equal(false, is.posInt(undefined))
    assert.equal(false, is.posInt(NaN))
    assert.equal(false, is.posInt(null))
    assert.equal(false, is.posInt(true))
    assert.equal(false, is.posInt(false))
    assert.equal(false, is.posInt({}))
    assert.equal(false, is.posInt([]))
    assert.equal(false, is.posInt(""))
    assert.equal(false, is.posInt("asdf"))
    assert.equal(false, is.posInt(1.23))
    assert.equal(false, is.posInt(-42))
    assert.equal(false, is.posInt(-1))
    assert.equal(false, is.posInt(0))
    assert.equal(true,  is.posInt(666)) // :metal:
  })

  it('#negativeInteger', function(){
    var fn = function(){}
    assert.equal(false, is.negativeInteger(fn))
    assert.equal(false, is.negativeInteger(new Date))
    assert.equal(false, is.negativeInteger(undefined))
    assert.equal(false, is.negativeInteger(NaN))
    assert.equal(false, is.negativeInteger(null))
    assert.equal(false, is.negativeInteger(true))
    assert.equal(false, is.negativeInteger(false))
    assert.equal(false, is.negativeInteger({}))
    assert.equal(false, is.negativeInteger([]))
    assert.equal(false, is.negativeInteger(""))
    assert.equal(false, is.negativeInteger("asdf"))
    assert.equal(false, is.negativeInteger(1.23))
    assert.equal(true,  is.negativeInteger(-42))
    assert.equal(true,  is.negativeInteger(-1))
    assert.equal(false, is.negativeInteger(0))
    assert.equal(false, is.negativeInteger(666)) // :metal:
  })

  it('#negInt', function(){
    var fn = function(){}
    assert.equal(false, is.negInt(fn))
    assert.equal(false, is.negInt(new Date))
    assert.equal(false, is.negInt(undefined))
    assert.equal(false, is.negInt(NaN))
    assert.equal(false, is.negInt(null))
    assert.equal(false, is.negInt(true))
    assert.equal(false, is.negInt(false))
    assert.equal(false, is.negInt({}))
    assert.equal(false, is.negInt([]))
    assert.equal(false, is.negInt(""))
    assert.equal(false, is.negInt("asdf"))
    assert.equal(false, is.negInt(1.23))
    assert.equal(true,  is.negInt(-42))
    assert.equal(true,  is.negInt(-1))
    assert.equal(false,  is.negInt(0))
    assert.equal(false,  is.negInt(666)) // :metal:
  })

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
    assert.equal(false, is.zero("asdf"))
    assert.equal(false, is.zero(1.23))
    assert.equal(false, is.zero(-42))
    assert.equal(false, is.zero(-1))
    assert.equal(true,  is.zero(0))
    assert.equal(false, is.zero(666)) // :metal:
  })


})
