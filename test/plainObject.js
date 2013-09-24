var assert = require('assert')
var is = require('../lib/is')
var fn = function(){}

var future = new Date('04/16/9999')
var today = new Date()
var past = new Date('04/16/1982')

describe('plainObject', function(){

  it('works', function(){
    assert.equal(false, is.plainObject(fn), 'fn is wrong')
    assert.equal(false, is.plainObject(new Date()), 'new Date() is wrong')
    assert.equal(false, is.plainObject(undefined), 'undefined is wrong')
    assert.equal(false, is.plainObject(NaN), 'NaN is wrong')
    assert.equal(false, is.plainObject(null), 'null is wrong')
    assert.equal(false, is.plainObject(true), 'true is wrong')
    assert.equal(false, is.plainObject(false), 'false is wrong')
    assert.equal(true , is.plainObject({}), '{} is wrong')
    assert.equal(false, is.plainObject([]), '[] is wrong')
    assert.equal(false, is.plainObject(""), '"" is wrong')
    assert.equal(false, is.plainObject("  "), '"  " is wrong')
    assert.equal(false, is.plainObject("asdf"), '"asdf" is wrong')
    assert.equal(false, is.plainObject("1.23"), '"1.23" is wrong')
    assert.equal(false, is.plainObject("-42"), '"-42" is wrong')
    assert.equal(false, is.plainObject("-42.01"), '"-42.01" is wrong')
    assert.equal(false, is.plainObject("-1"), '"-1" is wrong')
    assert.equal(false, is.plainObject("0"), '"0" is wrong')
    assert.equal(false, is.plainObject("666"), '"666" is wrong')
    assert.equal(false, is.plainObject(1.23), '1.23 is wrong')
    assert.equal(false, is.plainObject(-42), '-42 is wrong')
    assert.equal(false, is.plainObject(-1), '-1 is wrong')
    assert.equal(false, is.plainObject(0), '0 is wrong')
    assert.equal(false, is.plainObject(666), '666 is wrong')
  })

})
