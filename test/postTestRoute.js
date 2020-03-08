const app = require('../app.js'),
assert = require('assert'),
chai = require('chai'),
should = require('should');
request = require('supertest');

describe('POST /postTestRoute', function() {
  it('responds with json', function(done) {
  request(app)
    .post('/v1/test/postTestRoute')
    .send({email: 'your@email.com', password: 'yourpassword'})
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200).end(function(err,res){
      res.status.should.equal(200);
      res.body.should.be.json;
      res.body.should.have.property('email');
      res.body.should.have.property('password');
      res.body.email.should.equal('your@email.com');
      res.body.password.should.equal('yourpassword');
      done();
    });
  });
});

