var assert = require('assert')
var is = require('../is-too')
var fn = function(){}

describe('presence', function() {

  it('is.present', function(){
    assert.equal(false, is.present("   ")) // according to is, this is an empty string
    assert.equal(true , is.present("asdf"))
    assert.equal(true , is.present(1.23))
    assert.equal(true , is.present(-42))
    assert.equal(true , is.present(-1))
    assert.equal(true , is.present(0))
    assert.equal(true , is.present(666)) // :metal:

    assert.equal(false, is.present(is.toNum("asdf")))
    assert.equal(true , is.present(is.int("asdf"))) // NaN is technically "present"
    assert.equal(false, (is.present("asdf") && is.int("asdf"))) // this is probably how you'd do it, two checks, not one
  })

  it('not.present', function(){
    assert.equal(false, is.not.present(fn))
    assert.equal(false, is.not.present(new Date()))
    assert.equal(true , is.not.present(undefined))
    assert.equal(false, is.not.present(NaN))
    assert.equal(true , is.not.present(null))
    assert.equal(false, is.not.present(true))
    assert.equal(false, is.not.present(false))
    assert.equal(false, is.not.present(new Object()))
    assert.equal(false, is.not.present({}))
    assert.equal(false, is.not.present({foo:'bar'}))
    assert.equal(false, is.not.present(new Array()))
    assert.equal(false, is.not.present([]))
    assert.equal(true , is.not.present(""))
    assert.equal(true , is.not.present("   ")) // according to is, this is an empty string
    assert.equal(false, is.not.present("asdf"))
    assert.equal(false, is.not.present(1.23))
    assert.equal(false, is.not.present(-42))
    assert.equal(false, is.not.present(-1))
    assert.equal(false, is.not.present(0))
    assert.equal(false, is.not.present(666)) // :metal:

    assert.equal(true , is.not.present(is.toNum("asdf")))
    assert.equal(false, is.not.present(is.int("asdf"))) // NaN is technically "present"
    assert.equal(false, (is.not.present("asdf") && is.int("asdf"))) // this is probably how you'd do it, two checks, not one
  })
})
