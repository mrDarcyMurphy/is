var asserts = require('./asserts.js')

describe('objects', function(){

  it('is.object', function(){
    asserts.is('object', [
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
      'rx'
    ])
  })

  it('is.not.object', function(){
    asserts.not('object', [
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
      'rx'
    ])
  })

  it('is.plainObject', function(){
    asserts.is('plainObject', [
      'newBooleanTrue',
      'newBooleanFalse',
      'objectCreateNull',
      'objectCreateObjectPrototype',
      'newObject',
      'emptyObject',
      'plainObject',
      'objectLengthOne'
    ])
  })

  it('is.not.plainObject', function(){
    asserts.not('plainObject', [
      'newBooleanTrue',
      'newBooleanFalse',
      'objectCreateNull',
      'objectCreateObjectPrototype',
      'newObject',
      'emptyObject',
      'plainObject',
      'objectLengthOne'
    ])
  })

})
