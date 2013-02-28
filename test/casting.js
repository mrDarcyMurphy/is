var assert = require('assert')
var is = require('../lib/is')

describe('casting methods', function(){

  it('#toInteger', function(){
    var fn = function(){}

    // these actually become NaN which is a bitch to test
    assert.equal(true,  !is.toInteger(fn))
    assert.equal(true,  !is.toInteger(new Date))
    assert.equal(true,  !is.toInteger(undefined))
    assert.equal(true,  !is.toInteger(NaN))
    assert.equal(true,  !is.toInteger(null))
    assert.equal(true,  !is.toInteger(true))
    assert.equal(true,  !is.toInteger(false))
    assert.equal(true,  !is.toInteger({}))
    assert.equal(true,  !is.toInteger([]))
    assert.equal(true,  !is.toInteger(""))
    assert.equal(true,  !is.toInteger("   "))
    assert.equal(true,  !is.toInteger("asdf"))

    // actual numbers
    assert.equal(1,   is.toInteger("1.23"))
    assert.equal(-42, is.toInteger("-42"))
    assert.equal(-1,  is.toInteger("-1"))
    assert.equal(0,   is.toInteger("0"))
    assert.equal(666, is.toInteger("666"))
    assert.equal(1,   is.toInteger(1.23))
    assert.equal(-42, is.toInteger(-42))
    assert.equal(-1,  is.toInteger(-1))
    assert.equal(0,   is.toInteger(0))
    assert.equal(666, is.toInteger(666))
  })

})
