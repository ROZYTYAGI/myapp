var expect =require('chai').expect;
var app = require('../app');
var request= require('supertest');
var sinon = require('sinon');
var customer = require('../model/schema');
var modelStub = sinon.stub(customer,'remove');
var server= request.agent('http://localhost:3000');
var express = require('express');

describe ('delete method ', function(){
    
        before(()=>{
        modelStub.withArgs({'_id':'abcd'},{$set:{"name":"rozy","id":4321}})
        .yields(null,
            {"ok":1,
            "nModified":1,
            "n":1
        });
    });
        it('respond with json',function(done){
        request(app)
        .delete('/user/abcd')
        /*.expect('Content-Type',/json/)*/
        .send({"name":"rozy","id":4321})
        .end(function(err,res){
            if (err)return done(err);
            expect(res.body.ok).to.be.equal(1);
                 
              });
        done(); 
    });
});