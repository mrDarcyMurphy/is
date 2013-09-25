# To Test `is` in your Browser

There's an `index.html` and `index.min.html` in the test folder. For now, they load the lib so you can work with it. Eventually they'll have the full suite attached.

Ideally, open index.html and watch it fly.

# Complete Set of Test Values

    var fn = function(){}
    var exp = (666).toExponential()
    var hex = 0x1

    assert.equal(false, is.whatever(x), 'x should be false')
    assert.equal(true , is.whatever(x), 'x should be true')

    assert.equal(false, is.whatever( fn ), 'fn should be false')
    assert.equal(false, is.whatever( new Date() ), 'new Date() should be false')
    assert.equal(false, is.whatever( undefined ), 'undefined should be false')
    assert.equal(false, is.whatever( NaN ), 'NaN should be false')
    assert.equal(false, is.whatever( null ), 'null should be false')
    assert.equal(false, is.whatever( true ), 'true should be false')
    assert.equal(false, is.whatever( false ), 'false should be false')
    assert.equal(false, is.whatever( Object.create(null) ), 'Object.create(null) should be false')
    assert.equal(false, is.whatever( Object.create(Object.prototype) ), 'Object.create(Object.prototype) should be false')
    assert.equal(false, is.whatever( new Object() ), 'new Object() should be false')
    assert.equal(false, is.whatever( {} ), '{} should be false')
    assert.equal(false, is.whatever( {foo:"bar"} ), '{foo:"bar"} should be false')
    assert.equal(false, is.whatever( {length:1} ), '{length:1} should be false')
    assert.equal(false, is.whatever( new Array() ), 'new Array() should be false')
    assert.equal(false, is.whatever( [] ), '[] should be false')
    assert.equal(false, is.whatever( ["foo", "bar"] ), '["foo", "bar"] should be false')
    assert.equal(false, is.whatever( arguments ), 'arguments should be false')
    assert.equal(false, is.whatever( "" ), '"" should be false')
    assert.equal(false, is.whatever( "  " ), '"  " should be false')
    assert.equal(false, is.whatever( "asdf" ), '"asdf" should be false')
    assert.equal(false, is.whatever( "1.23" ), '"1.23" should be false')
    assert.equal(false, is.whatever( "-42" ), '"-42" should be false')
    assert.equal(false, is.whatever( "-42.01" ), '"-42.01" should be false')
    assert.equal(false, is.whatever( "-1" ), '"-1" should be false')
    assert.equal(false, is.whatever( "0" ), '"0" should be false')
    assert.equal(false, is.whatever( "666" ), '"666" should be false')
    assert.equal(false, is.whatever( 1.23 ), '1.23 should be false')
    assert.equal(false, is.whatever( -42 ), '-42 should be false')
    assert.equal(false, is.whatever( -1 ), '-1 should be false')
    assert.equal(false, is.whatever( 0 ), '0 should be false')
    assert.equal(false, is.whatever( 666 ), '666 should be false')
    assert.equal(false, is.whatever( -exp ), '-exp should be false')
    assert.equal(false, is.whatever( exp ), 'exp should be false')
    assert.equal(false, is.whatever( +exp ), '+exp should be false')
    assert.equal(false, is.whatever( -hex ), '-hex should be false')
    assert.equal(false, is.whatever( hex ), 'hex should be false')
    assert.equal(false, is.whatever( +hex ), '+hex should be false')
    assert.equal(false, is.whatever( -Infinity ), '-Infinity should be false')
    assert.equal(false, is.whatever( Infinity ), 'Infinity should be false')
    assert.equal(false, is.whatever( +Infinity ), '+Infinity should be false')
    assert.equal(false, is.whatever( "-Infinity" ), '"-Infinity" should be false')
    assert.equal(false, is.whatever( "Infinity" ), '"Infinity" should be false')
    assert.equal(false, is.whatever( "+Infinity" ), '"+Infinity" should be false')
