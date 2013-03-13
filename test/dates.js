var assert = require('assert')
var is = require('../lib/is')
var fn = function(){}

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
    var notToday = new Date('04/16/1982')
    assert.equal(false, is.today(notToday))

    var today = new Date()
    assert.equal(true , is.today(today))
  })

  it('futureDate', function(){
    var futureDate = new Date('04/16/9999')
    assert.equal(true, is.futureDate(futureDate))

    var today = new Date()
    assert.equal(false, is.futureDate(today))

    var past = new Date('04/16/1982')
    assert.equal(false, is.futureDate(past))
  })

  it('pastDate', function(){
    var futureDate = new Date('04/16/9999')
    assert.equal(false, is.pastDate(futureDate))

    var today = new Date()
    assert.equal(false, is.pastDate(today))

    var past = new Date('04/16/1982')
    assert.equal(true, is.pastDate(past))
  })


})
