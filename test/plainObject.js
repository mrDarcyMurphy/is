var assert = require('assert')
var is = require('../lib/is')
var fn = function(){}

var exp = (666).toExponential()
var hex = 0x1

describe('plainObject', function(){

  it('works', function(){
    assert.equal(false, is.plainObject(fn), 'fn is wrong')
    assert.equal(false, is.plainObject(new Date()), 'new Date() is wrong')
    assert.equal(false, is.plainObject(undefined), 'undefined is wrong')
    assert.equal(false, is.plainObject(NaN), 'NaN is wrong')
    assert.equal(false, is.plainObject(null), 'null is wrong')
    assert.equal(false, is.plainObject(true), 'true is wrong')
    assert.equal(false, is.plainObject(false), 'false is wrong')
    assert.equal(true , is.plainObject(new Object()), "new Object() is wrong")
    assert.equal(true , is.plainObject({}), "{} is wrong")
    assert.equal(true , is.plainObject({foo:'bar'}), "{foo:'bar'} is wrong")
    assert.equal(false, is.plainObject(new Array()), "new Array() is wrong")
    assert.equal(false, is.plainObject([]), '[] is wrong')
    assert.equal(false, is.plainObject(['foo', 'bar']), "['foo', 'bar'] is wrong")
    assert.equal(false, is.plainObject(arguments), "arguments is wrong")
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
    assert.equal(false, is.plainObject(exp), 'exp is wrong')
    assert.equal(false, is.plainObject(hex), 'hex is wrong')
    assert.equal(false, is.plainObject(Infinity), 'Infinity is wrong')
  })

})
