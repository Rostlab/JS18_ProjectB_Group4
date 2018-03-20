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

  it('should return an updateStyle action on POST /api/nlp for sentence "Hide legend"', (done) => {
    request(server)
      .post('/api/nlp')
      .send({
        sentence: 'Hide legend',
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
            showlegend: false,
          },
        },
      ])
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });

  it('should return an updateStyle action on POST /api/nlp for sentence "Hide legend"', (done) => {
    request(server)
      .post('/api/nlp')
      .send({
        sentence: 'Show legend',
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
            showlegend: true,
          },
        },
      ])
      .end((err) => {
        should.not.exist(err);
        done();
      });
  });

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
