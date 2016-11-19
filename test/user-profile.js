
var mongoose = require("mongoose");
//Require the dev-dependencies
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('/GET input', () => {
      it('it should return the input', (done) => {
            var input = "test";
            chai.request(server)
              .get('/api/userprofile/' + input)
              .end((err, res) => {
                res.should.have.status(200);
                res.body.data.should.be.eql(input);
              done();
            });
      });
  });
