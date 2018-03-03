var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function () {
  describe('viewerController', function () {

    describe('GET htmlFile', function () {
      it('should return a test page', function (done) {
        request(server)
          .get('')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'text/html; charset=UTF-8')
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            done();
          });
      });
    });

    describe('GET jsFile', function () {
      it('should return a script', function (done) {
        request(server)
          .get('/viewer.js')
          .set('Accept', 'application/json')
          .expect('Content-Type', 'application/javascript; charset=UTF-8')
          .expect(200)
          .end(function (err, res) {
            should.not.exist(err);
            done();
          });
      });
    });
  });
});
