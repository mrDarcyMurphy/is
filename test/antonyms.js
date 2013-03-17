var assert = require('assert')
var is = require('../lib/is')

describe('is.not', function(){

  it('has no toNumber', function(){
    assert.equal(is.not.toNumber, undefined)
  })

  it('has no toNum', function(){
    assert.equal(is.not.toNum, undefined)
  })

  it('has no toInteger', function(){
    assert.equal(is.not.toInteger, undefined)
  })

  it('has no toInt', function(){
    assert.equal(is.not.toInt, undefined)
  })

})
