import chai from 'chai'
import chaiHttp from 'chai-http'

chai.use(chaiHttp)
const expect = chai.expect
const request = chai.request

describe('Request Test', () => {
  it('Should request website', (done) => {
    request('https://reveweb.com.br')
      .get('/')
      .end((err, result) => {
        expect(result).to.have.status(200)
        done()
      })
  })
})