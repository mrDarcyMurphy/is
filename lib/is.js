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

    VERSION: '1.0.3',

    // OPERATORS

    /**
     * Is the subject loosely equivalent to the standard?
     *
     * @method equal
     * @param {Object} subject, required
     * @param {Object} standard, required
     */
    equal: function(x, y) {
      return x == y
    },

    /**
     * Is the subject greater than the standard?
     *
     * Performs basic JS greater than operator, which will cast values
     * http://bclary.com/2004/11/07/#a-11.8.2
     *
     * @method greaterThan
     * @param {Object} subject
     * @param {Object} standard, optional, defaults to 0
     */
    greaterThan: function(x, y) {
      y = y || 0
      return x > y
    },

    /**
     * Is the subject greater than or equal to the standard?
     *
     * Performs basic JS greater than or equal to operator, which will cast values
     * http://bclary.com/2004/11/07/#a-11.8.4
     *
     * @method greaterThanOrEqualTo
     * @param {Object} subject
     * @param {Object} standard, optional, defaults to 0
     */
    greaterThanOrEqualTo: function(x, y) {
      y = y || 0
      return x >= y
    },

    /**
     * Is the subject less than the standard?
     *
     * Performs basic JS less than operator, which will cast values
     * http://bclary.com/2004/11/07/#a-11.8.1
     *
     * @method lessThan
     * @param {Object} subject
     * @param {Object} standard, optional, defaults to 0
     */
    lessThan: function(x, y) {
      y = y || 0
      return x < y
    },

    /**
     * Is the subject less than or equal to the standard?
     *
     * Performs basic JS less than or equal to operator, which will cast values
     * http://bclary.com/2004/11/07/#a-11.8.3
     *
     * @method lessThanOrEqualTo
     * @param {Object} subject
     * @param {Object} standard, optional, defaults to 0
     */
    lessThanOrEqualTo: function(x, y) {
      y = y || 0
      return x <= y
    },


    // PRIMITIVES

    /**
     * Is the subject an array?
     *
     * @method array
     * @param {Array} subject, required
     */
    array: function(x) {
      return Array.isArray(x)
    },

    /**
     * Is the subject a boolean?
     *
     * @method boolean
     * @param {Boolean} subject, required
     */
    boolean: function(x) {
      return typeof x == 'boolean'
    },

    /**
     * Is the subject a function?
     *
     * @method func
     * @param {Function} subject, required
     */
    func: function(x) {
      return typeof x == 'function'
    },

    /**
     * Is the subject exactly null?
     *
     * @method nil
     * @param {Null} subject, required
     */
    nil: function(x) {
      return x === null
    },

    /**
     * Is the subject exactly undefined?
     *
     * @method undefined
     * @param {undefined} subject, required
     */
    undef: function(x) {
      return x === void 0
    },

    /**
     * Is the subject not null, undefined, or an empty string?
     *
     * @method present
     * @param {Object} subject, required
     */
    present: function(x) {
      return x != null && !is.emtStr(x)
    },


    // STRINGS

    /**
     * Is the subject a string?
     *
     * @method string
     * @param {String} subject, required
     */
    string: function(x) {
      return typeof x == 'string'
    },

    /**
     * Is the subject an empty string?
     * Empty being nothing or only whitespace.
     *
     * @method emptyString
     * @param {String} subject, required
     */
    emptyString: function(x) {
      return is.string(x) ? x.replace(/\s/g, '') === '' : false
    },


    // NUMBERS

    /**
     * Is the subject a number?
     *
     * @method number
     * @param {Object} subject, required
     */
    number: function(x) {
      return typeof x === 'number' && !isNaN(x)
    },

    /**
     * Is the subject a number, or a number in a string?
     *
     * @method aNumber
     * @param {Object} subject, required
     */
    aNumber: function(x) {
      return isNaN(parseFloat(x)) ? false : true
    },

    /**
     * Is the subject an integer?
     *
     * @method integer
     * @param {Number} subject, required
     */
    integer: function(x) {
      return typeof x === 'number' && x % 1 === 0
    },

    /**
     * Is the subject an integer, or an integer in a string?
     *
     * @method aInteger
     * @param {Object} subject, required
     */
    aInteger: function(x) {
      return is.int(is.toNum(x))
    },

    /**
     * Is the subject exactly zero?
     *
     * @method zero
     * @param {Number} subject, required
     */
    zero: function(x) {
      return x === 0
    },

    /**
     * Is the subject zero, or a zero in a string?
     *
     * @method aZero
     * @param {Object} subject, required
     */
    aZero: function(x) {
      return is.zero(is.toNum(x))
    },


    // DATES

    /**
     * Is the subject a date?
     *
     * @method date
     * @param {Object} required
     */
    date: function(x) {
      return Object.prototype.toString.call(x) == '[object Date]'
    },

    /**
     * Is the subject the same date as standard?
     * Does not test date times.
     *
     * @method sameDate
     * @param {Date} subject, required
     * @param {Date} standard, required
     */
    sameDate: function(x, y) {
      return is.date(x) && is.date(y) && !sortDates(x, y)
    },

    /**
     * Is the subject today?
     *
     * @method today
     * @param {Date} subject
     */
    today: function(x) {
      return is.date(x) && !sortDates(x)
    },

    /**
     * Is the subject a date in the future, or in the future of the provided standard?
     * Does not test date times.
     *
     * @method futureDate
     * @param {Date} subject, required
     * @param {Date} standard, optional
     */
    futureDate: function(x, y) {
      return is.date(x) && sortDates(x, y) > 0
    },

    /**
     * Is the subject a date in the past, or in the past of the provided standard?
     * Does not test date times.
     *
     * @method pastDate
     * @param {Date} subject
     * @param {Date} standard, optional
     */
    pastDate: function(x, y) {
      return is.date(x) && sortDates(x, y) < 0
    }

  }


  // ALIASES

  is.eq     = is.equal
  is.gt     = is.greaterThan
  is.gte    = is.greaterThanOrEqualTo
  is.lt     = is.lessThan
  is.lte    = is.lessThanOrEqualTo

  is.arr    = is.array
  is.bool   = is.boolean

  is.str    = is.string
  is.emtStr = is.emptyString

  is.aNum   = is.aNumber
  is.aInt   = is.aInteger
  is.num    = is.number
  is.int    = is.integer

  is.past   = is.pastDate
  is.future = is.futureDate


  // ANTONYMS

  /**
   * Creates `is.not` object and attaches all existing methods to it.
   * They return the opposite of their `is.methodName` counterparts.
   */
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

  /**
   * Attempts to convert subject to an integer.
   * Will cast `NaN` to `null` because you can still do math with `null`.
   *
   * @method toInteger
   * @param {Object} subject, required
   */
  is.toInt = is.toInteger = function(x) {
    var y = parseInt(x,10)
    return isNaN(y) ? null : y
  }

  /**
   * Attempts to convert subject to a number.
   * Will cast `NaN` to `null` because you can still do math with `null`.
   *
   * @method toNumber
   * @param {Object} subject, required
   */
  is.toNum = is.toNumber = function(x) {
    var y = parseFloat(x)
    return isNaN(y) ? null : y
  }


  // PRIVATE HELPERS

  /**
   * sort style comparison of provided dates
   *
   * @method sortDates
   * @param {Date} subject
   * @param {Date} standard, optional
   */
  function sortDates(x, y) {
    y = !is.date(y) ? new Date() : y
    var a = 'getFullYear', b = 'getMonth', c = 'getDate'
    return  x[a]() < y[a]() ? -1
          : x[a]() > y[a]() ? 1
          : x[b]() < y[b]() ? -1
          : x[b]() > y[b]() ? 1
          : x[c]() < y[c]() ? -1
          : x[c]() > y[c]() ? 1
          : 0
  }

  return is

})
