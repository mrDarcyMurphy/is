var assert = require('assert')
var is = require('../lib/is')

var fn = function(){}
var exp = (666).toExponential()
var hex = 0x1

describe('objects', function(){

  it('is.object', function(){
    assert.equal(false, is.object( fn ), 'fn should be false')
    assert.equal(true , is.object( new Date() ), 'new Date() should be true ')
    assert.equal(false, is.object( undefined ), 'undefined should be false')
    assert.equal(false, is.object( NaN ), 'NaN should be false')
    assert.equal(true , is.object( null ), 'null should be true ')
    assert.equal(false, is.object( true ), 'true should be false')
    assert.equal(false, is.object( false ), 'false should be false')
    assert.equal(true , is.object( Object.create(null) ), 'Object.create(null) should be true ')
    assert.equal(true , is.object( Object.create(Object.prototype) ), 'Object.create(Object.prototype) should be true ')
    assert.equal(true , is.object( new Object() ), 'new Object() should be true ')
    assert.equal(true , is.object( {} ), '{} should be true ')
    assert.equal(true , is.object( {foo:"bar"} ), '{foo:"bar"} should be true ')
    assert.equal(true , is.object( {length:1} ), '{length:1} should be true ')
    assert.equal(true , is.object( new Array() ), 'new Array() should be true ')
    assert.equal(true , is.object( [] ), '[] should be true ')
    assert.equal(true , is.object( ["foo", "bar"] ), '["foo", "bar"] should be true ')
    assert.equal(true , is.object( arguments ), 'arguments should be true ')
    assert.equal(false, is.object( "" ), '"" should be false')
    assert.equal(false, is.object( "  " ), '"  " should be false')
    assert.equal(false, is.object( "asdf" ), '"asdf" should be false')
    assert.equal(false, is.object( "1.23" ), '"1.23" should be false')
    assert.equal(false, is.object( "-42" ), '"-42" should be false')
    assert.equal(false, is.object( "-42.01" ), '"-42.01" should be false')
    assert.equal(false, is.object( "-1" ), '"-1" should be false')
    assert.equal(false, is.object( "0" ), '"0" should be false')
    assert.equal(false, is.object( "666" ), '"666" should be false')
    assert.equal(false, is.object( 1.23 ), '1.23 should be false')
    assert.equal(false, is.object( -42 ), '-42 should be false')
    assert.equal(false, is.object( -1 ), '-1 should be false')
    assert.equal(false, is.object( 0 ), '0 should be false')
    assert.equal(false, is.object( 666 ), '666 should be false')
    assert.equal(false, is.object( -exp ), '-exp should be false')
    assert.equal(false, is.object( exp ), 'exp should be false')
    assert.equal(false, is.object( +exp ), '+exp should be false')
    assert.equal(false, is.object( -hex ), '-hex should be false')
    assert.equal(false, is.object( hex ), 'hex should be false')
    assert.equal(false, is.object( +hex ), '+hex should be false')
    assert.equal(false, is.object( -Infinity ), '-Infinity should be false')
    assert.equal(false, is.object( Infinity ), 'Infinity should be false')
    assert.equal(false, is.object( +Infinity ), '+Infinity should be false')
    assert.equal(false, is.object( "-Infinity" ), '"-Infinity" should be false')
    assert.equal(false, is.object( "Infinity" ), '"Infinity" should be false')
    assert.equal(false, is.object( "+Infinity" ), '"+Infinity" should be false')
  })

  it('is.not.object', function(){
    assert.equal(true , is.not.object( fn ), 'fn should be true ')
    assert.equal(false, is.not.object( new Date() ), 'new Date() should be false')
    assert.equal(true , is.not.object( undefined ), 'undefined should be true ')
    assert.equal(true , is.not.object( NaN ), 'NaN should be true ')
    assert.equal(false, is.not.object( null ), 'null should be false')
    assert.equal(true , is.not.object( true ), 'true should be true ')
    assert.equal(true , is.not.object( false ), 'false should be true ')
    assert.equal(false, is.not.object( Object.create(null) ), 'Object.create(null) should be false')
    assert.equal(false, is.not.object( Object.create(Object.prototype) ), 'Object.create(Object.prototype) should be false')
    assert.equal(false, is.not.object( new Object() ), 'new Object() should be false')
    assert.equal(false, is.not.object( {} ), '{} should be false')
    assert.equal(false, is.not.object( {foo:"bar"} ), '{foo:"bar"} should be false')
    assert.equal(false, is.not.object( {length:1} ), '{length:1} should be false')
    assert.equal(false, is.not.object( new Array() ), 'new Array() should be false')
    assert.equal(false, is.not.object( [] ), '[] should be false')
    assert.equal(false, is.not.object( ["foo", "bar"] ), '["foo", "bar"] should be false')
    assert.equal(false, is.not.object( arguments ), 'arguments should be false')
    assert.equal(true , is.not.object( "" ), '"" should be true')
    assert.equal(true , is.not.object( "  " ), '"  " should be true')
    assert.equal(true , is.not.object( "asdf" ), '"asdf" should be true')
    assert.equal(true , is.not.object( "1.23" ), '"1.23" should be true')
    assert.equal(true , is.not.object( "-42" ), '"-42" should be true')
    assert.equal(true , is.not.object( "-42.01" ), '"-42.01" should be true')
    assert.equal(true , is.not.object( "-1" ), '"-1" should be true')
    assert.equal(true , is.not.object( "0" ), '"0" should be true')
    assert.equal(true , is.not.object( "666" ), '"666" should be true')
    assert.equal(true , is.not.object( 1.23 ), '1.23 should be true')
    assert.equal(true , is.not.object( -42 ), '-42 should be true')
    assert.equal(true , is.not.object( -1 ), '-1 should be true')
    assert.equal(true , is.not.object( 0 ), '0 should be true')
    assert.equal(true , is.not.object( 666 ), '666 should be true')
    assert.equal(true , is.not.object( -exp ), '-exp should be true')
    assert.equal(true , is.not.object( exp ), 'exp should be true')
    assert.equal(true , is.not.object( +exp ), '+exp should be true')
    assert.equal(true , is.not.object( -hex ), '-hex should be true')
    assert.equal(true , is.not.object( hex ), 'hex should be true')
    assert.equal(true , is.not.object( +hex ), '+hex should be true')
    assert.equal(true , is.not.object( -Infinity ), '-Infinity should be true')
    assert.equal(true , is.not.object( Infinity ), 'Infinity should be true')
    assert.equal(true , is.not.object( +Infinity ), '+Infinity should be true')
    assert.equal(true , is.not.object( "-Infinity" ), '"-Infinity" should be true')
    assert.equal(true , is.not.object( "Infinity" ), '"Infinity" should be true')
    assert.equal(true , is.not.object( "+Infinity" ), '"+Infinity" should be true')
  })

  it('is.plainObject', function(){
    assert.equal(false, is.plainObject( fn ), 'fn should be false')
    assert.equal(false, is.plainObject( new Date() ), 'new Date() should be false')
    assert.equal(false, is.plainObject( undefined ), 'undefined should be false')
    assert.equal(false, is.plainObject( NaN ), 'NaN should be false')
    assert.equal(false, is.plainObject( null ), 'null should be false')
    assert.equal(false, is.plainObject( true ), 'true should be false')
    assert.equal(false, is.plainObject( false ), 'false should be false')
    assert.equal(true , is.plainObject( Object.create(null) ), 'Object.create(null) should be true ')
    assert.equal(true , is.plainObject( Object.create(Object.prototype) ), 'Object.create(Object.prototype) should be true ')
    assert.equal(true , is.plainObject( new Object() ), 'new Object() should be true ')
    assert.equal(true , is.plainObject( {} ), '{} should be true ')
    assert.equal(true , is.plainObject( {foo:"bar"} ), '{foo:"bar"} should be true ')
    assert.equal(true , is.plainObject( {length:1} ), '{length:1} should be true ')
    assert.equal(false, is.plainObject( new Array() ), 'new Array() should be false')
    assert.equal(false, is.plainObject( [] ), '[] should be false')
    assert.equal(false, is.plainObject( ["foo", "bar"] ), '["foo", "bar"] should be false')
    assert.equal(false, is.plainObject( arguments ), 'arguments should be false')
    assert.equal(false, is.plainObject( "" ), '"" should be false')
    assert.equal(false, is.plainObject( "  " ), '"  " should be false')
    assert.equal(false, is.plainObject( "asdf" ), '"asdf" should be false')
    assert.equal(false, is.plainObject( "1.23" ), '"1.23" should be false')
    assert.equal(false, is.plainObject( "-42" ), '"-42" should be false')
    assert.equal(false, is.plainObject( "-42.01" ), '"-42.01" should be false')
    assert.equal(false, is.plainObject( "-1" ), '"-1" should be false')
    assert.equal(false, is.plainObject( "0" ), '"0" should be false')
    assert.equal(false, is.plainObject( "666" ), '"666" should be false')
    assert.equal(false, is.plainObject( 1.23 ), '1.23 should be false')
    assert.equal(false, is.plainObject( -42 ), '-42 should be false')
    assert.equal(false, is.plainObject( -1 ), '-1 should be false')
    assert.equal(false, is.plainObject( 0 ), '0 should be false')
    assert.equal(false, is.plainObject( 666 ), '666 should be false')
    assert.equal(false, is.plainObject( -exp ), '-exp should be false')
    assert.equal(false, is.plainObject( exp ), 'exp should be false')
    assert.equal(false, is.plainObject( +exp ), '+exp should be false')
    assert.equal(false, is.plainObject( -hex ), '-hex should be false')
    assert.equal(false, is.plainObject( hex ), 'hex should be false')
    assert.equal(false, is.plainObject( +hex ), '+hex should be false')
    assert.equal(false, is.plainObject( -Infinity ), '-Infinity should be false')
    assert.equal(false, is.plainObject( Infinity ), 'Infinity should be false')
    assert.equal(false, is.plainObject( +Infinity ), '+Infinity should be false')
    assert.equal(false, is.plainObject( "-Infinity" ), '"-Infinity" should be false')
    assert.equal(false, is.plainObject( "Infinity" ), '"Infinity" should be false')
    assert.equal(false, is.plainObject( "+Infinity" ), '"+Infinity" should be false')
  })

  it('is.not.plainObject', function(){
    assert.equal(true , is.not.plainObject( fn ), 'fn should be true ')
    assert.equal(true , is.not.plainObject( new Date() ), 'new Date() should be true ')
    assert.equal(true , is.not.plainObject( undefined ), 'undefined should be true ')
    assert.equal(true , is.not.plainObject( NaN ), 'NaN should be true ')
    assert.equal(true , is.not.plainObject( null ), 'null should be true ')
    assert.equal(true , is.not.plainObject( true ), 'true should be true ')
    assert.equal(true , is.not.plainObject( false ), 'false should be true')
    assert.equal(false, is.not.plainObject( Object.create(null) ), 'Object.create(null) should be false')
    assert.equal(false, is.not.plainObject( Object.create(Object.prototype) ), 'Object.create(Object.prototype) should be false')
    assert.equal(false, is.not.plainObject( new Object() ), 'new Object() should be false')
    assert.equal(false, is.not.plainObject( {} ), '{} should be false')
    assert.equal(false, is.not.plainObject( {foo:"bar"} ), '{foo:"bar"} should be false')
    assert.equal(false, is.not.plainObject( {length:1} ), '{length:1} should be false')
    assert.equal(true , is.not.plainObject( new Array() ), 'new Array() should be true ')
    assert.equal(true , is.not.plainObject( [] ), '[] should be true ')
    assert.equal(true , is.not.plainObject( ["foo", "bar"] ), '["foo", "bar"] should be true ')
    assert.equal(true , is.not.plainObject( arguments ), 'arguments should be true ')
    assert.equal(true , is.not.plainObject( "" ), '"" should be true ')
    assert.equal(true , is.not.plainObject( "  " ), '"  " should be true ')
    assert.equal(true , is.not.plainObject( "asdf" ), '"asdf" should be true ')
    assert.equal(true , is.not.plainObject( "1.23" ), '"1.23" should be true ')
    assert.equal(true , is.not.plainObject( "-42" ), '"-42" should be true ')
    assert.equal(true , is.not.plainObject( "-42.01" ), '"-42.01" should be true ')
    assert.equal(true , is.not.plainObject( "-1" ), '"-1" should be true ')
    assert.equal(true , is.not.plainObject( "0" ), '"0" should be true ')
    assert.equal(true , is.not.plainObject( "666" ), '"666" should be true ')
    assert.equal(true , is.not.plainObject( 1.23 ), '1.23 should be true ')
    assert.equal(true , is.not.plainObject( -42 ), '-42 should be true ')
    assert.equal(true , is.not.plainObject( -1 ), '-1 should be true ')
    assert.equal(true , is.not.plainObject( 0 ), '0 should be true ')
    assert.equal(true , is.not.plainObject( 666 ), '666 should be true ')
    assert.equal(true , is.not.plainObject( -exp ), '-exp should be true ')
    assert.equal(true , is.not.plainObject( exp ), 'exp should be true ')
    assert.equal(true , is.not.plainObject( +exp ), '+exp should be true ')
    assert.equal(true , is.not.plainObject( -hex ), '-hex should be true ')
    assert.equal(true , is.not.plainObject( hex ), 'hex should be true ')
    assert.equal(true , is.not.plainObject( +hex ), '+hex should be true ')
    assert.equal(true , is.not.plainObject( -Infinity ), '-Infinity should be true ')
    assert.equal(true , is.not.plainObject( Infinity ), 'Infinity should be true ')
    assert.equal(true , is.not.plainObject( +Infinity ), '+Infinity should be true ')
    assert.equal(true , is.not.plainObject( "-Infinity" ), '"-Infinity" should be true ')
    assert.equal(true , is.not.plainObject( "Infinity" ), '"Infinity" should be true ')
    assert.equal(true , is.not.plainObject( "+Infinity" ), '"+Infinity" should be true ')
  })

})
