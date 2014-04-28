var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')
var arrays = ['newArray', 'emptyArray', 'plainArray']

describe('Arrays', function(){

  it('is.array', function(){
    asserts.is('array', arrays)
  })

  it('is.not.array', function(){
    asserts.not('array', arrays)
  })

  it('is.arr is an alias of is.array', function(){
    assert.equal(is.arr, is.array)
  })

})

describe('Arguments', function(){

  it('is.args', function(){
    asserts.is('args', ['args'])
  })

  it('is.not.args', function(){
    asserts.not('args', ['args'])
  })

})
