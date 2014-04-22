function subjects() {

  var fn = function(){}
  var exp = (666).toExponential()
  var hex = 0x1

  return {
    'fn'                          : fn,
    'newDate'                     : new Date(),
    'undef'                       : undefined,
    'nan'                         : NaN,
    'nil'                         : null,
    't'                           : true,
    'f'                           : false,
    'newBooleanTrue'              : new Boolean(true),
    'newBooleanFalse'             : new Boolean(false),
    'objectCreateNull'            : Object.create(null),
    'objectCreateObjectPrototype' : Object.create(Object.prototype),
    'newObject'                   : new Object(),
    'emptyObject'                 : {},
    'plainObject'                 : {foo:"bar"},
    'objectLengthOne'             : {length:1},
    'newArray'                    : new Array(),
    'emptyArray'                  : [],
    'plainArray'                  : ["foo", "bar"],
    'args'                        : arguments,
    'emptyString'                 : "",
    'whiteSpaceString'            : "  ",
    'alphaString'                 : "asdf",
    'positiveFloatString'         : "3.14",
    'negativeIntegerString'       : "-42",
    'negativeFloatString'         : "-42.01",
    'negativeOneString'           : "-1",
    'negativeZeroString'          : "-0",
    'zeroString'                  : "0",
    'positiveZeroString'          : "+0",
    'positiveIntegerString'       : "666",
    'positiveFloat'               : 3.14,
    'negativeIntegerInteger'      : -42,
    'negativeOne'                 : -1,
    'negativeZero'                : -0,
    'zero'                        : 0,
    'positiveZero'                : +0,
    'positiveInteger'             : 666,
    'negativeExponent'            : -exp,
    'exponent'                    : exp,
    'positiveExponent'            : +exp,
    'negativeHexadecimal'         : -hex,
    'hexadecimal'                 : hex,
    'positiveHexadecimal'         : +hex,
    'negativeInfinity'            : -Infinity,
    'infinity'                    : Infinity,
    'positiveInfinity'            : +Infinity,
    'negativeInfinityString'      : "-Infinity",
    'infinityString'              : "Infinity",
    'positiveInfinityString'      : "+Infinity",
    'regex'                       : /^foo/,
    'newRegExp'                   : new RegExp("^foo"),
    'rxString'                    : "^foo"
  }

}

module.exports = subjects()
