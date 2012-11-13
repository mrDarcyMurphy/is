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
    assert.equal(true,  is.int(-1))
    assert.equal(true,  is.int(0))
    assert.equal(true,  is.int(666)) // :metal:
  })

})
