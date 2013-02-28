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
    assert.equal(false, is.integer(" 	"))
    assert.equal(false, is.integer("asdf"))
    assert.equal(false, is.integer(1.23))
    assert.equal(true,  is.integer(-42))
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
    assert.equal(false, is.int(" 	"))
    assert.equal(false, is.int("asdf"))
    assert.equal(false, is.int(1.23))
    assert.equal(true,  is.int(-42))
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
    assert.equal(false, is.positiveInteger(" 	"))
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
    assert.equal(false, is.posInt(" 	"))
    assert.equal(false, is.posInt("asdf"))
    assert.equal(false, is.posInt(1.23))
    assert.equal(false, is.posInt(-42))
    assert.equal(false, is.posInt(-1))
    assert.equal(false, is.posInt(0))
    assert.equal(true,  is.posInt(666)) // :metal:
  })

  it('#posInt + arg', function(){
    var fn = function(){}
    assert.equal(false, is.posInt(fn, 2))
    assert.equal(false, is.posInt(new Date, 2))
    assert.equal(false, is.posInt(undefined, 2))
    assert.equal(false, is.posInt(NaN, 2))
    assert.equal(false, is.posInt(null, 2))
    assert.equal(false, is.posInt(true, 2))
    assert.equal(false, is.posInt(false, 2))
    assert.equal(false, is.posInt({}, 2))
    assert.equal(false, is.posInt([], 2))
    assert.equal(false, is.posInt("", 2))
    assert.equal(false, is.posInt(" 	", 2))
    assert.equal(false, is.posInt("asdf", 2))
    assert.equal(false, is.posInt(1.23, 2))
    assert.equal(false, is.posInt(-42, 2))
    assert.equal(false, is.posInt(-1, 2))
    assert.equal(false, is.posInt(0, 2))
    assert.equal(false, is.posInt(1, 2))
    assert.equal(true,  is.posInt(666, 2))

    assert.equal(false, is.posInt(fn, -2))
    assert.equal(false, is.posInt(new Date, -2))
    assert.equal(false, is.posInt(undefined, -2))
    assert.equal(false, is.posInt(NaN, -2))
    assert.equal(false, is.posInt(null, -2))
    assert.equal(false, is.posInt(true, -2))
    assert.equal(false, is.posInt(false, -2))
    assert.equal(false, is.posInt({}, -2))
    assert.equal(false, is.posInt([], -2))
    assert.equal(false, is.posInt("", -2))
    assert.equal(false, is.posInt(" 	", -2))
    assert.equal(false, is.posInt("asdf", -2))
    assert.equal(false, is.posInt(1.23, -2))
    assert.equal(false, is.posInt(-42, -2))
    assert.equal(false, is.posInt(-1, -2))
    assert.equal(false, is.posInt(0, -2))
    assert.equal(true,  is.posInt(1, -2))
    assert.equal(true,  is.posInt(666, -2))
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
    assert.equal(false, is.negativeInteger(" 	"))
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
    assert.equal(false, is.negInt(" 	"))
    assert.equal(false, is.negInt("asdf"))
    assert.equal(false, is.negInt(1.23))
    assert.equal(true,  is.negInt(-42))
    assert.equal(true,  is.negInt(-1))
    assert.equal(false, is.negInt(0))
    assert.equal(false, is.negInt(666)) // :metal:
  })

  it('#posInt + arg', function(){
    var fn = function(){}
    assert.equal(false, is.negInt(fn, 2))
    assert.equal(false, is.negInt(new Date, 2))
    assert.equal(false, is.negInt(undefined, 2))
    assert.equal(false, is.negInt(NaN, 2))
    assert.equal(false, is.negInt(null, 2))
    assert.equal(false, is.negInt(true, 2))
    assert.equal(false, is.negInt(false, 2))
    assert.equal(false, is.negInt({}, 2))
    assert.equal(false, is.negInt([], 2))
    assert.equal(false, is.negInt("", 2))
    assert.equal(false, is.negInt("   ", 2))
    assert.equal(false, is.negInt("asdf", 2))
    assert.equal(false, is.negInt(1.23, 2))
    assert.equal(true,  is.negInt(-42, 2))
    assert.equal(true,  is.negInt(-1, 2))
    assert.equal(false, is.negInt(0, 2))
    assert.equal(false, is.negInt(1, 2))
    assert.equal(false, is.negInt(666, 2))

    assert.equal(false, is.negInt(fn, -2))
    assert.equal(false, is.negInt(new Date, -2))
    assert.equal(false, is.negInt(undefined, -2))
    assert.equal(false, is.negInt(NaN, -2))
    assert.equal(false, is.negInt(null, -2))
    assert.equal(false, is.negInt(true, -2))
    assert.equal(false, is.negInt(false, -2))
    assert.equal(false, is.negInt({}, -2))
    assert.equal(false, is.negInt([], -2))
    assert.equal(false, is.negInt("", -2))
    assert.equal(false, is.negInt("   ", -2))
    assert.equal(false, is.negInt("asdf", -2))
    assert.equal(false, is.negInt(1.23, -2))
    assert.equal(true, is.negInt(-42, -2))
    assert.equal(false, is.negInt(-1, -2))
    assert.equal(false, is.negInt(0, -2))
    assert.equal(false, is.negInt(1, -2))
    assert.equal(false, is.negInt(666, -2))
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
    assert.equal(false, is.zero(" 	"))
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
    assert.equal(true,  is.string(" 	"))
    assert.equal(true,  is.string("asdf"))
    assert.equal(false, is.string(1.23))
    assert.equal(false, is.string(-42))
    assert.equal(false, is.string(-1))
    assert.equal(false, is.string(0))
    assert.equal(false, is.string(666)) // :metal:
  })

  it('#emptyString', function(){
    var fn = function(){}
    assert.equal(false, is.emptyString(fn))
    assert.equal(false, is.emptyString(new Date))
    assert.equal(false, is.emptyString(undefined))
    assert.equal(false, is.emptyString(NaN))
    assert.equal(false, is.emptyString(null))
    assert.equal(false, is.emptyString(true))
    assert.equal(false, is.emptyString(false))
    assert.equal(false, is.emptyString({}))
    assert.equal(false, is.emptyString([]))
    assert.equal(true,  is.emptyString(""))
    assert.equal(true,  is.emptyString(" 	"))
    assert.equal(false, is.emptyString("asdf"))
    assert.equal(false, is.emptyString(1.23))
    assert.equal(false, is.emptyString(-42))
    assert.equal(false, is.emptyString(-1))
    assert.equal(false, is.emptyString(0))
    assert.equal(false, is.emptyString(666)) // :metal:
  })

  it('#void', function(){
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
    assert.equal(false, is.not(" 	"))
    assert.equal(false, is.not("asdf"))
    assert.equal(false, is.not(1.23))
    assert.equal(false, is.not(-42))
    assert.equal(false, is.not(-1))
    assert.equal(false, is.not(0))
    assert.equal(false, is.not(666)) // :metal:
  })

})
