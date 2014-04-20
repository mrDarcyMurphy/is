var asserts = require('./asserts.js')

var regexs = ['rx', 'newRegexp']

describe('regular expressions', function(){

  it('is.regex', function(){
    asserts.is('regex', regexs)
  })

  it('is.not.regex', function(){
    asserts.not('regex', regexs)
  })

})
