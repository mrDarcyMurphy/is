var assert = require('assert')
var is = require('../lib/is')

describe('primitives', function(){

  it('string', function(){
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

  it('function', function(){
    var fn = function(){}
    assert.equal(true,  is.func(fn))
    assert.equal(false, is.func(new Date))
    assert.equal(false, is.func(undefined))
    assert.equal(false, is.func(NaN))
    assert.equal(false, is.func(null))
    assert.equal(false, is.func(true))
    assert.equal(false, is.func(false))
    assert.equal(false, is.func({}))
    assert.equal(false, is.func([]))
    assert.equal(false, is.func(""))
    assert.equal(false, is.func("   "))
    assert.equal(false, is.func("asdf"))
    assert.equal(false, is.func(1.23))
    assert.equal(false, is.func(-42))
    assert.equal(false, is.func(-1))
    assert.equal(false, is.func(0))
    assert.equal(false, is.func(666)) // :metal:
  })

  it('boolean', function(){
    var fn = function(){}
    assert.equal(false, is.boolean(fn))
    assert.equal(false, is.boolean(new Date))
    assert.equal(false, is.boolean(undefined))
    assert.equal(false, is.boolean(NaN))
    assert.equal(false, is.boolean(null))
    assert.equal(true,  is.boolean(true))
    assert.equal(true,  is.boolean(false))
    assert.equal(false, is.boolean({}))
    assert.equal(false, is.boolean([]))
    assert.equal(false, is.boolean(""))
    assert.equal(false, is.boolean("   "))
    assert.equal(false, is.boolean("asdf"))
    assert.equal(false, is.boolean(1.23))
    assert.equal(false, is.boolean(-42))
    assert.equal(false, is.boolean(-1))
    assert.equal(false, is.boolean(0))
    assert.equal(false, is.boolean(666)) // :metal:
  })

  it('object', function(){
    var fn = function(){}
    assert.equal(true , is.object(fn))
    assert.equal(true , is.object(new Date))
    assert.equal(false, is.object(undefined))
    assert.equal(false, is.object(NaN))
    assert.equal(false, is.object(null))
    assert.equal(false, is.object(true))
    assert.equal(false, is.object(false))
    assert.equal(true ,  is.object({}))
    assert.equal(true , is.object([]))
    assert.equal(false, is.object(""))
    assert.equal(false, is.object("   "))
    assert.equal(false, is.object("asdf"))
    assert.equal(false, is.object(1.23))
    assert.equal(false, is.object(-42))
    assert.equal(false, is.object(-1))
    assert.equal(false, is.object(0))
    assert.equal(false, is.object(666)) // :metal:
  })

  it('emptyObject', function(){
    var fn = function(){}
    assert.equal(true , is.emptyObject(fn))
    assert.equal(true , is.emptyObject(new Date))
    assert.equal(true , is.emptyObject(undefined))
    assert.equal(true , is.emptyObject(NaN))
    assert.equal(true , is.emptyObject(null))
    assert.equal(true , is.emptyObject(true))
    assert.equal(true , is.emptyObject(false))
    assert.equal(true , is.emptyObject({}))
    assert.equal(false, is.emptyObject({foo:'bar'}))
    assert.equal(true , is.emptyObject([]))
    assert.equal(true , is.emptyObject(""))
    assert.equal(false, is.emptyObject("   "))
    assert.equal(false, is.emptyObject("asdf"))
    assert.equal(true , is.emptyObject(1.23))
    assert.equal(true , is.emptyObject(-42))
    assert.equal(true , is.emptyObject(-1))
    assert.equal(true , is.emptyObject(0))
    assert.equal(true , is.emptyObject(666)) // :metal:
  })

})
