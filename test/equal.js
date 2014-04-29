var is = require('../is-too')
var assert = require('assert')
var asserts = require('./_asserts')
var subjects = require('./_subjects')

var equals = ['nil', 'undef']
var exactlies = ['undef']

describe('equality', function(){

  it('is.equal', function(){
    asserts.is('equal', equals)
    assert(is.equal(subjects.negativeZero, subjects.zero))
    assert(is.equal(subjects.negativeZero, subjects.positiveZero))
  })

  it('is.equal', function(){
    asserts.not('equal', equals)
    assert(is.not.equal(subjects.negativeExponent, subjects.positiveExponent))
  })

  it('is.exactly', function(){
    asserts.is('exactly', exactlies)
    assert(is.exactly(1, 1))
    assert(is.exactly(subjects.negativeZero, subjects.positiveZero))
  })

  it('is.not.exactly', function(){
    assert(is.not.exactly(subjects.negativeExponent, subjects.positiveExponent))
  })

})
