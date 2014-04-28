var assert = require('assert')
var is = require('../is-too')
var fn = function(){}

describe('Standard Objects', function(){

  it('is.boolean', function(){
    assert.equal(false, is.boolean(fn))
    assert.equal(false, is.boolean(new Date()))
    assert.equal(false, is.boolean(undefined))
    assert.equal(false, is.boolean(NaN))
    assert.equal(false, is.boolean(null))
    assert.equal(true,  is.boolean(true))
    assert.equal(true,  is.boolean(false))
    assert.equal(false, is.boolean(new Object()))
    assert.equal(false, is.boolean({}))
    assert.equal(false, is.boolean({foo:'bar'}))
    assert.equal(false, is.boolean(new Array()))
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

  it('is.not.boolean', function(){
    assert.equal(true , is.not.boolean(fn))
    assert.equal(true , is.not.boolean(new Date()))
    assert.equal(true , is.not.boolean(undefined))
    assert.equal(true , is.not.boolean(NaN))
    assert.equal(true , is.not.boolean(null))
    assert.equal(false, is.not.boolean(true))
    assert.equal(false, is.not.boolean(false))
    assert.equal(true , is.not.boolean(new Object()))
    assert.equal(true , is.not.boolean({}))
    assert.equal(true , is.not.boolean({foo:'bar'}))
    assert.equal(true , is.not.boolean(new Array()))
    assert.equal(true , is.not.boolean([]))
    assert.equal(true , is.not.boolean(""))
    assert.equal(true , is.not.boolean("   "))
    assert.equal(true , is.not.boolean("asdf"))
    assert.equal(true , is.not.boolean(1.23))
    assert.equal(true , is.not.boolean(-42))
    assert.equal(true , is.not.boolean(-1))
    assert.equal(true , is.not.boolean(0))
    assert.equal(true , is.not.boolean(666)) // :metal:
  })

  it('bool', function(){
  })

  it('is.func', function(){
    assert.equal(true , is.func(fn))
    assert.equal(false, is.func(new Date()))
    assert.equal(false, is.func(undefined))
    assert.equal(false, is.func(NaN))
    assert.equal(false, is.func(null))
    assert.equal(false, is.func(true))
    assert.equal(false, is.func(false))
    assert.equal(false, is.func(new Object()))
    assert.equal(false, is.func({}))
    assert.equal(false, is.func({foo:'bar'}))
    assert.equal(false, is.func(new Array()))
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

  it('not.func', function(){
  })

  it('is.nil', function(){
  })

  it('not.nil', function(){
  })

  it('is.undef', function(){
  })

  it('undef', function(){
  })


})
