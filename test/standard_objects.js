var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')

var booleans = ['t', 'f']
var functions = ['fn']


describe('Standard Objects', function(){

  describe('true/false', function(){
    it('is.boolean', function(){
      asserts.is('boolean', booleans)
    })
    it('is.not.boolean', function(){
      asserts.not('boolean', booleans)
    })
    it('`is.bool` is an alias of `is.boolean`', function(){
      assert.equal(is.bool, is.boolean)
    })
  })

  describe('functions', function(){
    it('is.func', function(){
      asserts.is('func', functions)
    })
    it('not.func', function(){
      asserts.not('func', functions)
    })
    it('`is.fn` is an alias of `is.func`', function(){
      assert.equal(is.fn, is.func)
    })
  })

  describe('null', function(){
    it('is.nil', function(){
      asserts.is('nil', ['nil'])
    })
    it('is.not.nil', function(){
      asserts.not('nil', ['nil'])
    })
  })

  describe('undefined', function(){
    it('is.undef', function(){
      asserts.is('undef', ['undef'])
    })

    it('undef', function(){
      asserts.not('undef', ['undef'])
    })
  })

})
