var asserts = require('./asserts.js')
var assert = require('assert')
var is = require('../is-too')

var future = new Date('04/16/9999')
var today = new Date()
var past = new Date('04/16/1982')
var dates = ['newDate']

describe('dates', function(){

  it('is.date', function(){
    asserts.is('date', dates)
  })

  it('is.not.date', function(){
    asserts.not('date', dates)
  })

  describe("integrity - `is.date` won't change passed in dates", function() {
    it('sameDate', function() {
      var a = '2013-06-08T00:00:00.000Z'
      var b = '2013-06-08T00:00:00.000Z'
      var x = new Date(a)
      var y = new Date(b)
      assert(is.sameDate(x, y))
      assert.equal(x.toISOString(), a)
      assert.equal(y.toISOString(), b)
    })
    it('today', function() {
      var a = new Date()
      var i = a.toISOString()
      assert(is.today(a))
      assert.equal(a.toISOString(), i)
    })
    it('futureDate', function(){
      var a = new Date('9999-01-01T07:30:00.000Z')
      var i = a.toISOString()
      assert(is.futureDate(a))
      assert.equal(a.toISOString(), i)
    })
    it('pastDate', function(){
      var a = new Date('1999-01-01T07:30:00.000Z')
      var i = a.toISOString()
      assert(is.pastDate(a))
      assert.equal(a.toISOString(), i)
    })
  })

  it('is.today', function(){
    assert.equal(false, is.today(past))
    assert.equal(true , is.today(today))
    assert.equal(false, is.today(future))
    asserts.is('today', dates)
  })

  it('is.not.today', function(){
    assert.equal(true , is.not.today(past))
    assert.equal(false, is.not.today(today))
    assert.equal(true , is.not.today(future))
    asserts.not('today', dates)
  })

  it('sameDate', function(){
    assert.equal(true , is.sameDate(past, past))
    assert.equal(false, is.sameDate(past, today))
    assert.equal(false, is.sameDate(past, future))
    assert.equal(false, is.sameDate(today, past))
    assert.equal(true , is.sameDate(today, today))
    assert.equal(false, is.sameDate(today, future))
    assert.equal(false, is.sameDate(future, past))
    assert.equal(false, is.sameDate(future, today))
    assert.equal(true , is.sameDate(future, future))
  })

  it('not.sameDate', function(){
    assert.equal(false, is.not.sameDate(past, past))
    assert.equal(true , is.not.sameDate(past, today))
    assert.equal(true , is.not.sameDate(past, future))
    assert.equal(true , is.not.sameDate(today, past))
    assert.equal(false, is.not.sameDate(today, today))
    assert.equal(true , is.not.sameDate(today, future))
    assert.equal(true , is.not.sameDate(future, past))
    assert.equal(true , is.not.sameDate(future, today))
    assert.equal(false, is.not.sameDate(future, future))
  })

  it('futureDate', function(){
    assert.equal(false, is.futureDate(past))
    assert.equal(false, is.futureDate(today))
    assert.equal(true , is.futureDate(future))
  })

  it('not.futureDate', function(){
    assert.equal(true , is.not.futureDate(past))
    assert.equal(true , is.not.futureDate(today))
    assert.equal(false, is.not.futureDate(future))
  })

  it('future', function(){
    assert.equal(false, is.future(past))
    assert.equal(false, is.future(today))
    assert.equal(true , is.future(future))
  })

  it('not.future', function(){
    assert.equal(true , is.not.future(past))
    assert.equal(true , is.not.future(today))
    assert.equal(false, is.not.future(future))
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

  it('not.futureDate + attr', function(){
    assert.equal(true , is.not.futureDate(past, past))
    assert.equal(true , is.not.futureDate(past, today))
    assert.equal(true , is.not.futureDate(past, future))
    assert.equal(false, is.not.futureDate(today, past))
    assert.equal(true , is.not.futureDate(today, today))
    assert.equal(true , is.not.futureDate(today, future))
    assert.equal(false, is.not.futureDate(future, past))
    assert.equal(false, is.not.futureDate(future, today))
    assert.equal(true , is.not.futureDate(future, future))
  })

  it('pastDate', function(){
    assert.equal(true , is.pastDate(past))
    assert.equal(false, is.pastDate(today))
    assert.equal(false, is.pastDate(future))
  })

  it('not.pastDate', function(){
    assert.equal(false, is.not.pastDate(past))
    assert.equal(true , is.not.pastDate(today))
    assert.equal(true , is.not.pastDate(future))
  })

  it('past', function(){
    assert.equal(true , is.past(past))
    assert.equal(false, is.past(today))
    assert.equal(false, is.past(future))
  })

  it('not.past', function(){
    assert.equal(false, is.not.past(past))
    assert.equal(true , is.not.past(today))
    assert.equal(true , is.not.past(future))
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

  it('not.pastDate + attr', function(){
    assert.equal(true , is.not.pastDate(past, past))
    assert.equal(false, is.not.pastDate(past, today))
    assert.equal(false, is.not.pastDate(past, future))
    assert.equal(true , is.not.pastDate(today, past))
    assert.equal(true , is.not.pastDate(today, today))
    assert.equal(false, is.not.pastDate(today, future))
    assert.equal(true , is.not.pastDate(future, past))
    assert.equal(true , is.not.pastDate(future, today))
    assert.equal(true , is.not.pastDate(future, future))
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

    assert.equal(true , is.not.today("garbage"))
    assert.equal(true , is.not.pastDate("garbage"))
    assert.equal(true , is.not.futureDate("garbage"))
    assert.equal(true , is.not.today("garbage", "garbage"))
    assert.equal(true , is.not.pastDate("garbage", "garbage"))
    assert.equal(true , is.not.futureDate("garbage", "garbage"))
    assert.equal(false, is.not.pastDate(past, "garbage"))
    assert.equal(true , is.not.pastDate(today, "garbage"))
    assert.equal(true , is.not.pastDate(future, "garbage"))
    assert.equal(true , is.not.today(past, "garbage"))
    assert.equal(false, is.not.today(today, "garbage"))
    assert.equal(true , is.not.today(future, "garbage"))
    assert.equal(true , is.not.futureDate(past, "garbage"))
    assert.equal(true , is.not.futureDate(today, "garbage"))
    assert.equal(false, is.not.futureDate(future, "garbage"))
  })

  it('works with equal', function(){
    assert.equal(true , is.equal(past, past))
    assert.equal(false, is.equal(past, today))
    assert.equal(false, is.equal(past, future))
    assert.equal(false, is.equal(today, past))
    assert.equal(true , is.equal(today, today))
    assert.equal(false, is.equal(today, future))
    assert.equal(false, is.equal(future, past))
    assert.equal(false, is.equal(future, today))
    assert.equal(true , is.equal(future, future))
  })

  it('works with greaterThan', function(){
    assert.equal(false, is.greaterThan(past, past))
    assert.equal(false, is.greaterThan(past, today))
    assert.equal(false, is.greaterThan(past, future))
    assert.equal(true , is.greaterThan(today, past))
    assert.equal(false, is.greaterThan(today, today))
    assert.equal(false, is.greaterThan(today, future))
    assert.equal(true , is.greaterThan(future, past))
    assert.equal(true , is.greaterThan(future, today))
    assert.equal(false, is.greaterThan(future, future))
  })

  it('works with lessThan', function(){
    assert.equal(false, is.lessThan(past, past))
    assert.equal(true , is.lessThan(past, today))
    assert.equal(true , is.lessThan(past, future))
    assert.equal(false, is.lessThan(today, past))
    assert.equal(false, is.lessThan(today, today))
    assert.equal(true , is.lessThan(today, future))
    assert.equal(false, is.lessThan(future, past))
    assert.equal(false, is.lessThan(future, today))
    assert.equal(false, is.lessThan(future, future))
  })

})
