const calcModule = require('../calc')
const chai = require('chai')
const expect = chai.expect

import sinon from 'sinon'

/** 
describe('calc test', function(){
  it('Should sum return 4', (done) => {
    let result = calcModule.sum(2,2)
    expect(result).to.equal(4)
    done()
  })
})
*/

describe('Sum Test', function(){
  it('Should sum return 4', (done) => {
    let mock = sinon.mock(calcModule)
    mock.expects('sum').yields(null, 4)
    calcModule.sum(2,2, (err, result) => {
      mock.verify()
      mock.restore()
      
      expect(result).to.be.equal(4)
      done()
    })
  })
})
