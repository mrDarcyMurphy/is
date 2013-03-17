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

    VERSION: '0.4.1',

    // CASTING METHODS

    aNumber: function(x) {
      return isNaN(parseFloat(x)) ? false : true
    },

    aInteger: function(x) {
      return this.int(this.toNum(x))
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
      return toString.call(x) == '[object Boolean]'
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

    /**
     * @method date
     * @param {Object} required
     */
    date: function(x) {
      return toString.call(x) == '[object Date]'
    },

    /**
     * do the days match?
     *
     * @method today
     * @param {Date} subject, required
     * @param {Date} standard, required
     */
    sameDate: function(x, y) {
      if (!is.date(x) || !is.date(y)) return false
      var z = normalizeDates(x, y)
      return z.x == z.y
    },

    /**
     * only checks if date is today
     *
     * @method today
     * @param {Date} subject
     */
    today: function(x) {
      if (!is.date(x)) return false
      var z = normalizeDates(x)
      return z.x == z.y
    },

    // is x after y (or today)
    futureDate: function(x, y) {
      if (!is.date(x)) return false
      var z = normalizeDates(x,y)
      return z.x > z.y
    },

    // is x before y (or today)
    pastDate: function(x, y) {
      if (!is.date(x)) return false
      var z = normalizeDates(x,y)
      return z.x < z.y
    },


    // numbers

    number: function(x) {
      return typeof x === 'number' && !isNaN(x)
    },

    integer: function(x) {
      return typeof x === 'number' && x % 1 === 0
    },

    zero: function(x) {
      return x === 0
    },


    // smooth operators

    /**
     * performs loose equality check
     * unlike most methods, standard is required, otherwise, you're a dumbass
     *
     * @method equal
     * @param {Object} subject, required
     * @param {Object} standard, required
     */
    equal: function(x,y) {
      return x == y
    },

    /**
     * Performs basic JS greater than operator, which will cast values
     * http://bclary.com/2004/11/07/#a-11.8.2
     *
     * @method greaterThan
     * @param {} subject
     * @param {} standard, optional, defaults to 0
     */
    greaterThan: function(x, y) {
      y = y || 0
      return x > y
    },

    /**
     * Performs basic JS greater than or equal to operator, which will cast values
     * http://bclary.com/2004/11/07/#a-11.8.4
     *
     * @method greaterThan
     * @param {} subject
     * @param {} standard, optional, defaults to 0
     */
    greaterThanOrEqualTo: function(x, y) {
      y = y || 0
      return x >= y
    },

    /**
     * Performs basic JS less than operator, which will cast values
     * http://bclary.com/2004/11/07/#a-11.8.1
     *
     * @method greaterThan
     * @param {} subject
     * @param {} standard, optional, defaults to 0
     */
    lessThan: function(x, y) {
      y = y || 0
      return x < y
    },

    /**
     * Performs basic JS less than or equal to operator, which will cast values
     * http://bclary.com/2004/11/07/#a-11.8.3
     *
     * @method greaterThan
     * @param {} subject
     * @param {} standard, optional, defaults to 0
     */
    lessThanOrEqualTo: function(x, y) {
      y = y || 0
      return x <= y
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

  is.arr    = is.array
  is.bool   = is.boolean

  is.past   = is.pastDate
  is.future = is.futureDate

  is.aNum   = is.aNumber
  is.aInt   = is.aInteger
  is.num    = is.number
  is.int    = is.integer

  is.gt     = is.greaterThan
  is.gte    = is.greaterThanOrEqualTo
  is.lt     = is.lessThan
  is.lte    = is.lessThanOrEqualTo

  is.str    = is.string
  is.emtStr = is.emptyString


  // antonyms

  var isnt = is.not = {}
  var method
  for (method in is) {
    // grab all methods except toThing helpers
    if (is.hasOwnProperty(method) && typeof is[method] == 'function') {
      isnt[method] = (function(method){
        return function(){
          return !is[method].apply(is, arguments)
        }
      })(method)
    }
  }


  // PUBLIC HELPERS

  // casts NaN to null because you can still do math with null
  is.toInt = is.toInteger = function(x) {
    var y = parseInt(x,10)
    return isNaN(y) ? null : y
  }

  // casts NaN to null because you can still do math with null
  is.toNum = is.toNumber = function(x) {
    var y = parseFloat(x)
    return isNaN(y) ? null : y
  }


  // PRIVATE HELPERS

  /**
   * sets times to 00:00 and pulls getTime to enable comparison of dates
   *
   * @method normalizeDates
   * @param {Date} subject
   * @param {Date} standard, optional
   */
  function normalizeDates(x, y) {
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
