const app = require('../app.js'),
assert = require('assert'),
chai = require('chai'),
should = require('should');
request = require('supertest');



describe('GET /getTestRoute', function() {
  it('responds with json', function(done) {
  request(app)
    .get('/v1/test/getTestRoute')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function(err, res) {
        res.status.should.equal(200);
        res.body.appName.should.equal('Orchistration Server');
        res.body.message.should.equal('is running, heres a test respone.');
        done();
    });
  });
});

