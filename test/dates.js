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

  it('now', function(){
    assert.equal(false, is.now(past))
    assert.equal(true , is.now(today))
    assert.equal(false, is.now(future))
  })

  it('today + attr', function(){
    assert.equal(true , is.today(past, past))
    assert.equal(false, is.today(past, today))
    assert.equal(false, is.today(past, future))
    assert.equal(false, is.today(today, past))
    assert.equal(true , is.today(today, today))
    assert.equal(false, is.today(today, future))
    assert.equal(false, is.today(future, past))
    assert.equal(false, is.today(future, today))
    assert.equal(true , is.today(future, future))
  })

  it('futureDate', function(){
    assert.equal(false, is.futureDate(past))
    assert.equal(false, is.futureDate(today))
    assert.equal(true , is.futureDate(future))
  })

  it('future', function(){
    assert.equal(false, is.future(past))
    assert.equal(false, is.future(today))
    assert.equal(true , is.future(future))
  })

  it('futureDate + attr', function(){
    assert.equal(false, is.futureDate(past, past))
    assert.equal(false, is.futureDate(past, today))
    assert.equal(false, is.futureDate(past, future))
    assert.equal(true , is.futureDate(today, past))
    assert.equal(false, is.futureDate(today, today))
    assert.equal(false, is.futureDate(today, future))
    assert.equal(true , is.futureDate(future, past))
    assert.equal(true , is.futureDate(future, today))
    assert.equal(false, is.futureDate(future, future))
  })

  it('pastDate', function(){
    assert.equal(true , is.pastDate(past))
    assert.equal(false, is.pastDate(today))
    assert.equal(false, is.pastDate(future))
  })

  it('past', function(){
    assert.equal(true , is.past(past))
    assert.equal(false, is.past(today))
    assert.equal(false, is.past(future))
  })

  it('pastDate + attr', function(){
    assert.equal(false, is.pastDate(past, past))
    assert.equal(true , is.pastDate(past, today))
    assert.equal(true , is.pastDate(past, future))
    assert.equal(false, is.pastDate(today, past))
    assert.equal(false, is.pastDate(today, today))
    assert.equal(true , is.pastDate(today, future))
    assert.equal(false, is.pastDate(future, past))
    assert.equal(false, is.pastDate(future, today))
    assert.equal(false, is.pastDate(future, future))
  })

  it("doesn't choke on bad data", function(){
    assert.equal(false, is.today("garbage"))
    assert.equal(false, is.pastDate("garbage"))
    assert.equal(false, is.futureDate("garbage"))
    assert.equal(false, is.today("garbage", "garbage"))
    assert.equal(false, is.pastDate("garbage", "garbage"))
    assert.equal(false, is.futureDate("garbage", "garbage"))
    assert.equal(true , is.pastDate(past, "garbage"))
    assert.equal(false, is.pastDate(today, "garbage"))
    assert.equal(false, is.pastDate(future, "garbage"))
    assert.equal(false, is.today(past, "garbage"))
    assert.equal(true , is.today(today, "garbage"))
    assert.equal(false, is.today(future, "garbage"))
    assert.equal(false, is.futureDate(past, "garbage"))
    assert.equal(false, is.futureDate(today, "garbage"))
    assert.equal(true , is.futureDate(future, "garbage"))
  })


})
