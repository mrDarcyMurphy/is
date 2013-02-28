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

    VERSION: '0.0.1',

    // validations

    integer: function(x) {
      return typeof x === 'number' && x % 1 === 0
    },

    positiveInteger: function(x) {
      return this.int(x) && x > 0
    },

    negativeInteger: function(x) {
      return this.int(x) && x < 0
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
  is.int    = is.integer
  is.posInt = is.positiveInteger
  is.negInt = is.negativeInteger
  is.str    = is.string

  return is

})
