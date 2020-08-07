import sinon from 'sinon'
import chai from 'chai'
import mongoose from 'mongoose'
import Todo from './../models/task'

const expect = chai.expect
require('sinon-mongoose')

describe('Task', () => {
  it('Should create a new task', (done) => {
    let mock = sinon.mock(
      new Todo({
        name: 'Task test'
      })
    )
    let todo = mock.object
    mock.expects('save').yields(null, {
      status: true,
      data: {
        name: 'Task Test',
        completed: false
      }
    })
    todo.save((err, result) => {
      mock.verify()
      mock.restore()
      expect(result.status).to.equal(true)
      expect(result.data).to.be.an('object')
      done()
    })
  })

  it('Should remove one task by id', (done) => {
    let mock = sinon.mock(Todo)

    mock.expects('findOneAndRemove').withArgs({
      _id: '5f2c81e5c633dd24486eb965'
    }).yields(null, {
      status: true,
      _id: '5f2c81e5c633dd24486eb965'
    })
    Todo.findOneAndRemove({
      _id: '5f2c81e5c633dd24486eb965'
    }, (err, result) => {
      mock.verify()
      mock.restore()

      expect(result.status).to.equal(true)
      done()
    })

  })

})