var is = require('../lib/is')
var assert = require('assert')
var asserts = require('./asserts.js')

var equals = ['nil', 'undef']
var exactlies = ['undef']

describe('equality', function(){

  it('is.equal', function(){
    asserts.is('equal', equals)
  })

  it('is.exactly', function(){
    asserts.is('exactly', exactlies)
    assert(is.exactly(1, 1))
  })

})
