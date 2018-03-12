const should = require('should');
const request = require('supertest');
const server = require('../../../app');

describe('api.controllers.functionController', () => {
  it('should return an updateLayout action on POST /api/function/general/changeTitle', (done) => {
    const newTitle = 'Test title';

    request(server)
      .post('/api/function/general/changeTitle')
      .send({ title: newTitle })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([
        {
          action: 'updateLayout',
          value: {
            title: newTitle,
          },
        },
      ])
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });
});
