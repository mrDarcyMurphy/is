var assert = require('assert')
var is = require('../lib/is')
var isnt = is.isnt

var fn = function(){}

describe('antonyms', function(){

  it('numbers', function(){
    assert.equal(true,  isnt.integer(fn))
    assert.equal(true,  isnt.integer(new Date))
    assert.equal(true,  isnt.integer(undefined))
    assert.equal(true,  isnt.integer(NaN))
    assert.equal(true,  isnt.integer(null))
    assert.equal(true,  isnt.integer(true))
    assert.equal(true,  isnt.integer(false))
    assert.equal(true,  isnt.integer({}))
    assert.equal(true,  isnt.integer([]))
    assert.equal(true,  isnt.integer(""))
    assert.equal(true,  isnt.integer(" 	"))
    assert.equal(true,  isnt.integer("asdf"))
    assert.equal(true,  isnt.integer("1.23"))
    assert.equal(true,  isnt.integer("-42"))
    assert.equal(true,  isnt.integer("-42.01"))
    assert.equal(true,  isnt.integer("-1"))
    assert.equal(true,  isnt.integer("0"))
    assert.equal(true,  isnt.integer("666"))
    assert.equal(true,  isnt.integer(1.23))
    assert.equal(false, isnt.integer(-42))
    assert.equal(false, isnt.integer(-1))
    assert.equal(false, isnt.integer(0))
    assert.equal(false, isnt.integer(666))
  })

})
