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


    // HELPERS

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


    // CASTING METHODS

    aInt: function(x) {
      return this.int(this.toNum(x))
    },

    aNegativeInteger: function(x, y) {
      return this.negInt(this.toNum(x), y)
    },

    aPositiveInteger: function(x, y) {
      return this.posInt(this.toNum(x), y)
    },

    aZero: function(x) {
      return this.zero(this.toNum(x))
    },


    // VALIDATIONS


    // numbers

    integer: function(x) {
      return typeof x === 'number' && x % 1 === 0
    },

    negativeInteger: function(x, y) {
      y = this.int(y) && y < 0 ? y : 0
      return this.int(x) && x < y
    },

    positiveInteger: function(x, y) {
      y = this.int(y) && y > 0 ? y : 0
      return this.int(x) && x > y
    },

    zero: function(x) {
      return x === 0
    },


    // strings

    string: function(x) {
      return toString.call(x) == '[object String]'
    },

    emptyString: function(x) {
      return this.string(x) ? x.replace(/\s/g, '') === '' : false
    },


    // dates

    date: function(x) {
    },

    // is x before y (or today)
    pastDate: function(x, y) {

    },

    // is x before y (or today)
    futureDate: function(x, y) {
    },

    // is today
    today: function(x) {
    },


    // primitives

    array: function(x) {
      return toString.call(x) == '[object Array]'
    },

    object: function(x) {
      return x === Object(x)
    },

    emptyObject: function(x) {
      if (x == null) return true
      if (this.array(x) || this.string(x)) return this.zero(x.length)
      for (var y in x) if (x.hasOwnProperty(y)) return false
      return true
    },

    func: function(x) {
      return toString.call(x) == '[object Function]'
    },

    boolean: function(x) {
      return x === true || x === false || toString.call(x) == '[object Boolean]'
    },

    nil: function(x) {
      return x === null
    },

    undefined: function(x) {
      return x === void 0
    }


    // NaN

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
  // TODO: moar aliases

  // antonyms

  var isnt = is.not = {}
  for (var method in is) {
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
