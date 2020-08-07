import sinon from 'sinon'
import chai from 'chai'
import chaiHttp from 'chai-http'
import mongoose from 'mongoose'
import Todo from './../models/task'

chai.use(chaiHttp)
require('sinon-mongoose')
const expect = chai.expect
const request = chai.request
const uri = 'http://localhost:3000'

describe('Task Request', () => {

  it('Should make a request and return a list of task', (done) => {

    request(uri).get('/task').end((err, res) => {
      if(!err){
        expect(res.body.status).to.be.true
        expect(res.body.data).to.be.an('array')
        done()
      }
    })

  })

})
