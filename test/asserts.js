// asserts
// just a helper to clean up some code and centralize testing

var is = require('../is-too')
var assert = require('assert')
var subjects = require('./subjects.js')
var subjectKeys = Object.keys(subjects)

module.exports = {

  // can skip items because things like Object.create(null) will throw an error when attempting to convert to a primitive
  is: function(method, keysThatPass, skippers) {
    skippers = (is.present(skippers) && is.array(skippers)) ? skippers : []
    subjectKeys.forEach(function(key){
      if ( skippers.indexOf(key) > -1 ) return
      if ( keysThatPass.indexOf(key) > -1 )
        assert.equal(true , is[method](subjects[key]), key + ' is expected to pass.')
      else
        assert.equal(false, is[method](subjects[key]), key + ' is expected to fail.')
    })
  },

  standard: function(method, keysThatPass, standard, skippers) {
    skippers = (is.present(skippers) && is.array(skippers)) ? skippers : []
    subjectKeys.forEach(function(key){
      if ( skippers.indexOf(key) > -1 ) return
      if ( keysThatPass.indexOf(key) > -1 )
        assert.equal(true , is[method](subjects[key], standard), key + ' is expected to pass.')
      else
        assert.equal(false, is[method](subjects[key], standard), key + ' is expected to fail.')
    })
  },

  not: function(method, keysThatFail, skippers) {
    skippers = (is.present(skippers) && is.array(skippers)) ? skippers : []
    subjectKeys.forEach(function(key){
      if ( skippers.indexOf(key) > -1 ) return
      if ( keysThatFail.indexOf(key) > -1 )
        assert.equal(false, is.not[method](subjects[key]), key + ' is expected to fail.')
      else
        assert.equal(true , is.not[method](subjects[key]), key + ' is expected to pass.')
    })
  },

  notStandard: function(method, keysThatPass, standard) {
    subjectKeys.forEach(function(key){
      if ( keysThatPass.indexOf(key) > -1 )
        assert.equal(true , is.not[method](subjects[key], standard), key + ' is expected to pass.')
      else
        assert.equal(false, is.not[method](subjects[key], standard), key + ' is expected to fail.')
    })
  },

}
