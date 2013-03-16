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

    VERSION: '0.3.0',


    // HELPERS

    // casts NaN to null because you can still do math with null
    toInteger: function(x) {
      var y = parseInt(x,10)
      return isNaN(y) ? null : y
    },

    // casts NaN to null because you can still do math with null
    toNumber: function(x) {
      var y = parseFloat(x)
      return isNaN(y) ? null : y
    },


    // CASTING METHODS

    aNumber: function(x) {
      return isNaN(parseFloat(x)) ? false : true
    },

    aInteger: function(x) {
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


    // primitives

    array: function(x) {
      return toString.call(x) == '[object Array]'
    },

    boolean: function(x) {
      return x === true || x === false || toString.call(x) == '[object Boolean]'
    },

    func: function(x) {
      return toString.call(x) == '[object Function]'
    },

    nil: function(x) {
      return x === null
    },

    undef: function(x) {
      return x === void 0
    },

    present: function(x) {
      return x != null && !this.emtStr(x)
    },

    // dates

    date: function(x) {
      return toString.call(x) == '[object Date]'
    },

    // is x same as y (or today)
    today: function(x, y) {
      if (!this.date(x)) return false
      var z = normalizeDates(x,y)
      return z.x == z.y
    },

    // is x after y (or today)
    futureDate: function(x, y) {
      if (!this.date(x)) return false
      var z = normalizeDates(x,y)
      return z.x > z.y
    },

    // is x before y (or today)
    pastDate: function(x, y) {
      if (!this.date(x)) return false
      var z = normalizeDates(x,y)
      return z.x < z.y
    },


    // numbers

    number: function(x) {
      return (typeof x === 'number' && !isNaN(x))
    },

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
    }

  }


  // aliases

  is.toInt    = is.toInteger
  is.toNum    = is.toNumber

  is.arr      = is.array
  is.bool     = is.boolean

  is.past     = is.pastDate
  is.future   = is.futureDate

  is.aNum     = is.aNumber
  is.aInt     = is.aInteger
  is.aNegInt  = is.aNegativeInteger
  is.aPosInt  = is.aPositiveInteger
  is.num      = is.number
  is.int      = is.integer
  is.negInt   = is.negativeInteger
  is.posInt   = is.positiveInteger

  is.str      = is.string
  is.emtStr   = is.emptyString


  // antonyms

  var isnt = is.not = {}
  var method
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

  // PRIVATE HELPERS

  function normalizeDates(x,y) {
    y = (!y || !is.date(y)) ? new Date() : y
    x.setHours(0,0,0,0)
    y.setHours(0,0,0,0)
    return {
      x: x.getTime(),
      y: y.getTime()
    }
  }

  return is

})
