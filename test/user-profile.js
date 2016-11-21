
var mongoose = require("mongoose");
//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var users = require('../DAL/models/userprofile.js');
var should = chai.should();

chai.use(chaiHttp);

describe('UserProfile', () => {
    beforeEach((done) => {
        users.remove({}, (err) => {
           done();
        });
    });

describe('/GET input', () => {
      it('it should return the input', (done) => {
            var input = "test";
            chai.request(server)
              .get('/api/input/' + input)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.eql(input);
              done();
            });
      });
  });

  describe('/POST userprofile', () => {
        it('it should create a user profile', (done) => {

            chai.request(server)
                .post('/api/userprofile')
                .send({userprofileId: "mahshad", city: "toronto", submissions: [{question: "Q1", answer: "A1"}]})
                .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.not.have.property('error');
                  res.body.data.should.have.property('_id');
                done();
              });
            });

        it('it should not create any entry in userprofile without a user name', (done) => {
            var userprofile = {city: "toronto"};
            chai.request(server)
              .post('/api/userprofile/')
              .send({city: "toronto"})
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('error');
              done();
            });
          });
        it('it should not create any entry in userprofile for a duplicate user name', (done) => {
              var userprofile = {username: "mahshad"};
              chai.request(server)
              .post('/api/userprofile/')
              .send({username: "mahshad"})
              .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('error');
              done();
            });
        })
    });

  describe('/GET userprofile by Id', () => {
        it('it should return the user profile', (done) => {
              var input = "mahshad";
              chai.request(server)
                .get('/api/userprofile/' + input)
                .end((err, res) => {
                  console.log(res.body)
                  res.should.have.status(200);
                  res.body.should.be.a('object');
                  res.body.should.be.eql( {"data" : null});
                done();
              });
        });
    });
})
