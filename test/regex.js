var asserts = require('./asserts.js')

var regexs = ['regex', 'newRegExp']

describe('regular expressions', function(){

  it('is.regex', function(){
    asserts.is('regex', regexs)
  })

  it('is.not.regex', function(){
    asserts.not('regex', regexs)
  })

})
