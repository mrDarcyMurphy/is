/*!
  * is - simple validations
  * https://github.com/mrDarcyMurphy/is
  * copyright Darcy Murphy
  * MIT License
  */

!function (name, definition) {
  if (typeof module != 'undefined') module.exports = definition()
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()
}('is', function () {

  var is = {

    VERSION: '0.0.8',

    // helpers

    toNumber: function(x) {
      return parseFloat(x)
    },

    toInteger: function(x) {
      return parseInt(x,10)
    },

    // casting methods

    aZero: function(x) {
      return this.zero(this.toNum(x))
    },

    aInt: function(x) {
      return this.int(this.toNum(x))
    },

    aPositiveInteger: function(x, y) {
      return this.posInt(this.toNum(x), y)
    },

    aNegativeInteger: function(x, y) {
      return this.negInt(this.toNum(x), y)
    },


    // validations

    integer: function(x) {
      return typeof x === 'number' && x % 1 === 0
    },

    positiveInteger: function(x, y) {
      y = this.int(y) && y > 0 ? y : 0
      return this.int(x) && x > y
    },

    negativeInteger: function(x, y) {
      y = this.int(y) && y < 0 ? y : 0
      return this.int(x) && x < y
    },

    zero: function(x) {
      return x === 0
    },

    string: function(x) {
      return typeof x === 'string'
    },

    emptyString: function(x) {
      return this.string(x) ? x.replace(/\s/g, '') === '' : false
    }

  }

  // antonyms

  // var isnt = is.isnt = {

  //   // casting methods

  //   aZero: function() {
  //     return !is.aZero.apply(is, arguments)
  //   },

  //   aInt: function() {
  //     return !is.aInt.apply(is, arguments)
  //   },

  //   aPositiveInteger: function() {
  //     return !is.aPositiveInteger.apply(is, arguments)
  //   },

  //   aNegativeInteger: function() {
  //     return !is.aNegativeInteger.apply(is, arguments)
  //   },

  //   // validations

  //   integer: function() {
  //     return !is.integer.apply(is, arguments)
  //   },

  //   positiveInteger: function() {
  //     return !is.positiveInteger.apply(is, arguments)
  //   },

  //   negativeInteger: function() {
  //     return !is.negativeInteger.apply(is, arguments)
  //   },

  //   zero: function() {
  //     return !is.zero.apply(is, arguments)
  //   },

  //   string: function() {
  //     return !is.string.apply(is, arguments)
  //   },

  //   emptyString: function() {
  //     return !is.emptyString.apply(is, arguments)
  //   }
  // }

  var isnt = is.isnt = (function(){
    var antonyms = {}
    var methods = [ 'toInteger', 'toNumber', 'aPositiveInteger', 'aNegativeInteger', 'integer', 'positiveInteger', 'negativeInteger', 'string', 'emptyString', 'toInt', 'toNum', 'aPosInt', 'aNegInt', 'int', 'posInt', 'negInt', 'str', 'emtStr']
    for (var i = methods.length - 1; i >= 0; i--) {
      antonyms[methods[i]] = (function(name){
        return function(){
          return !is[name].apply(is, arguments)
        }
      })(methods[i])
    }
    return antonyms
  })()


  // aliases

  is.toInt    = is.toInteger
  is.toNum    = is.toNumber
  is.aPosInt  = is.aPositiveInteger
  is.aNegInt  = is.aNegativeInteger

  is.int      = is.integer
  is.posInt   = is.positiveInteger
  is.negInt   = is.negativeInteger
  is.str      = is.string
  is.emtStr   = is.emptyString

  return is

})
