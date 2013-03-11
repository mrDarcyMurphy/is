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


    // objects

    object: function(x) {
      return x === Object(x)
    },

    // lifted from jquery
    emptyObject: function(x) {
      for (var name in x) { return false }
      return true
    },

    // lifted from jquery
    plainObject: function( obj ) {
      // Must be an Object.
      // Because of IE, we also have to check the presence of the constructor property.
      // Make sure that DOM nodes and window objects don't pass through, as well
      if ( !obj || toString.call(obj) !== "[object Object]" || obj.nodeType || obj.setInterval ) {
        return false;
      }

      // Not own constructor property must be Object
      if ( obj.constructor
        && !hasOwnProperty.call(obj, "constructor")
        && !hasOwnProperty.call(obj.constructor.prototype, "isPrototypeOf") ) {
        return false;
      }

      // Own properties are enumerated firstly, so to speed up,
      // if last one is own, then all properties are own.

      var key;
      for ( key in obj ) {}

      return key === undefined || hasOwnProperty.call( obj, key );
    },


    // primitives

    array: function(x) {
      return toString.call(x) == '[object Array]'
    },

    boolean: function(x) {
      return x === true || x === false || toString.call(x) == '[object Boolean]'
    },

    function: function(x) {
      return toString.call(x) == '[object Function]'
    },

    null: function(x) {
      return x === null
    },

    undefined: function(x) {
      return x === void 0
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
