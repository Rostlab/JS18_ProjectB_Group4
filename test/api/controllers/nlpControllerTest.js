const should = require('should');
const request = require('supertest');
const server = require('../../../app');

describe('api.controllers.nlpController', () => {
  it('should return an updateStyle action on POST /api/nlp for sentence "Change plot title to Pie Chart"', (done) => {
    request(server)
      .post('/api/nlp')
      .send({
        sentence: 'Change plot title to Pie Chart',
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
          action: 'updateLayout',
          value: {
            title: 'Pie Chart',
          },
        },
      ])
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });

  it('should return response code of 400 on POST /api/nlp for unrecognize sentence', (done) => {
    request(server)
      .post('/api/nlp')
      .send({
        sentence: 'c2jc20j392vrk,jfcjk',
        data: [
          {
            type: 'pie',
          },
        ],
        layout: {},
      })
      .set('Accept', 'application/json')
      .expect(400)
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });
});
