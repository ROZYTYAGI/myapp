const express = require('express');
const request = require('supertest');
const expect = require('chai').should();
const sinon = require('sinon');
const model = require('../model/schema');
var modelStub = sinon.stub(model.prototype,'save')
const app = require('../app');
const url =request.agent('http://localhost:3000')
describe('test my post function',function(){
    it('it should create users',function(done){
      beforeEach((done)=>{
         modelStub.yields(null,{"name":"rozy","id": 1235})

        request(app)
     .post('/user')
     /*.send({"name":"rozy","id": 1235})
     .expect(200)
     .expect('Content-Type', /json/)*/
     .end(function(err, res) {
       if (err) err;
       res.body.should.have.property("name", "rozy");
       res.body.should.have.property("id", 1235);
       done();
           });
     });
      done();
    });
});


