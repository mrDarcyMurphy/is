var assert = require('assert')
var is = require('../lib/is')
var fn = function(){}

var future = new Date('04/16/9999')
var today = new Date()
var past = new Date('04/16/1982')

describe('dates', function(){

  it('date', function(){
    assert.equal(false, is.date(fn))
    assert.equal(true , is.date(new Date()))
    assert.equal(false, is.date(undefined))
    assert.equal(false, is.date(NaN))
    assert.equal(false, is.date(null))
    assert.equal(false, is.date(true))
    assert.equal(false, is.date(false))
    assert.equal(false, is.date({}))
    assert.equal(false, is.date([]))
    assert.equal(false, is.date(""))
    assert.equal(false, is.date("  "))
    assert.equal(false, is.date("asdf"))
    assert.equal(false, is.date("1.23"))
    assert.equal(false, is.date("-42"))
    assert.equal(false, is.date("-42.01"))
    assert.equal(false, is.date("-1"))
    assert.equal(false, is.date("0"))
    assert.equal(false, is.date("666"))
    assert.equal(false, is.date(1.23))
    assert.equal(false, is.date(-42))
    assert.equal(false, is.date(-1))
    assert.equal(false, is.date(0))
    assert.equal(false, is.date(666))
  })

  it('today', function(){
    assert.equal(false, is.today(past))
    assert.equal(true , is.today(today))
    assert.equal(false, is.today(future))
  })

  it('futureDate', function(){
    assert.equal(false, is.futureDate(past))
    assert.equal(false, is.futureDate(today))
    assert.equal(true , is.futureDate(future))
  })

  it('futureDate + attr', function(){
    assert.equal(false, is.futureDate(past))
    assert.equal(false, is.futureDate(today))
    assert.equal(true , is.futureDate(future))
  })

  it('pastDate', function(){
    assert.equal(true , is.pastDate(past))
    assert.equal(false, is.pastDate(today))
    assert.equal(false, is.pastDate(future))
  })

  it('pastDate + attr', function(){
    assert.equal(true , is.pastDate(past))
    assert.equal(false, is.pastDate(today))
    assert.equal(false, is.pastDate(future))
  })

})
