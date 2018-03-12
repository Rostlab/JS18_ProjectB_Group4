const should = require('should');
const request = require('supertest');
const server = require('../../../app');

describe('api.controllers.nlpController', () => {
  it('should return an updateStyle action on POST /api/nlp for sentence "Display as percentage"', (done) => {
    request(server)
      .post('/api/nlp')
      .send({
        sentence: 'Display as percentage',
        data: [
          {
            type: 'pie',
          },
        ],
        layout: {},
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .expect([
        {
          action: 'updateStyle',
          value: {
            textinfo: 'percent',
          },
        },
      ])
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });
});
