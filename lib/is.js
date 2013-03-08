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

    VERSION: '0.0.10',


    // helpers

    // casts NaN to null because you can still do math with null
    toNumber: function(x) {
      var y = parseFloat(x)
      return isNaN(y) ? null : y
    },

    // casts NaN to null because you can still do math with null
    toInteger: function(x) {
      var y = parseInt(x,10)
      return isNaN(y) ? null : y
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


  // antonyms

  var isnt = is.not = {}
  for (method in is) {
    // grab all methods except toThing helpers
    if (is.hasOwnProperty(method) && typeof is[method] == 'function' && method.indexOf('to') !== 0) {
      isnt[method] = (function(method){
        return function(){
          return !is[method].apply(is, arguments)
        }
      })(method)
    }
  }


  return is

})
