var asserts = require('./asserts.js')

var objects = [
  'newDate',
  'nil',
  'newBooleanTrue',
  'newBooleanFalse',
  'objectCreateNull',
  'objectCreateObjectPrototype',
  'newObject',
  'emptyObject',
  'plainObject',
  'objectLengthOne',
  'newArray',
  'emptyArray',
  'plainArray',
  'args',
  'regex',
  'newRegExp'
]

var plainObjects = [
  'newBooleanTrue',
  'newBooleanFalse',
  'objectCreateNull',
  'objectCreateObjectPrototype',
  'newObject',
  'emptyObject',
  'plainObject',
  'objectLengthOne'
]

describe('objects', function(){

  it('is.object', function(){
    asserts.is('object', objects)
  })

  it('is.not.object', function(){
    asserts.not('object', objects)
  })

  it('is.plainObject', function(){
    asserts.is('plainObject', plainObjects)
  })

  it('is.not.plainObject', function(){
    asserts.not('plainObject', plainObjects)
  })

})
