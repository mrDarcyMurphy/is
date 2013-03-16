var assert = require('assert')
var is = require('../lib/is')
var isnt = is.isnt

var fn = function(){}

describe('isnt', function(){

  it('has no toNumber', function(){
    assert.equal(is.not.toNumber, undefined)
  })

  it('has no toInteger', function(){
    assert.equal(is.not.toInteger, undefined)
  })

})
