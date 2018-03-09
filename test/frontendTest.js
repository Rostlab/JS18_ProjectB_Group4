const should = require('should');
const request = require('supertest');
const server = require('../app');

describe('frontend', () => {
  it('should return a test page', (done) => {
    request(server)
      .get('')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=UTF-8')
      .expect(200)
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });

  it('should return a script', (done) => {
    request(server)
      .get('/viewer.js')
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/javascript; charset=UTF-8')
      .expect(200)
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });
});
