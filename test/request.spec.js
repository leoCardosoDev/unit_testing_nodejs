import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const request = chai.request

describe('Request Test', () => {

  let res = {}

  beforeEach((done) => {
    request('https://reveweb.com.br')
      .get('/')
      .end((err, response) => {
        res = response
        done()
      })
  })

  it('Should request website and return status 200', () => {
    expect(res).to.have.status(200)
  })

  it('Should have body not null', () => {
    expect(res.body).to.not.equal(null)
  })

  afterEach((done) => {
    res = {}
    done()
  })
})