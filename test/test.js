const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const server = require('../app');

chai.use(chaiHttp);

describe('Simple Web App Tests', () => {
  it('should return a 200 status code', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should contain "Welcome" in the body', (done) => {
    chai.request(server)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.include('Welcome');
        done();
      });
  });
});