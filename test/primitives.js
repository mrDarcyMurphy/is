var assert = require('assert')
var is = require('../lib/is')

describe('primitives', function(){

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

})
