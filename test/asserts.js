// asserts
// just a helper to clean up some code and centralize testing

var is = require('../lib/is')
var assert = require('assert')
var subjects = require('./subjects.js')
var subjectKeys = Object.keys(subjects)

module.exports = {

  is: function(method, keysThatPass) {
    subjectKeys.forEach(function(key){
      if ( keysThatPass.indexOf(key) > -1 )
        assert.equal(true , is[method](subjects[key]), key + ' should be true.')
      else
        assert.equal(false, is[method](subjects[key]), key + ' should be false.')
    })
  },

  not: function(method, keysThatFail) {
    subjectKeys.forEach(function(key){
      if ( keysThatFail.indexOf(key) > -1 )
        assert.equal(false, is.not[method](subjects[key]), key + ' should be false.')
      else
        assert.equal(true , is.not[method](subjects[key]), key + ' should be true.')
    })
  }

}
