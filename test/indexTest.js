var expect =require('chai').expect;
var app = require('../app');
var request= require('supertest');
var sinon = require('sinon');
var customer = require('../model/schema');
var modelStub = sinon.stub(customer,'find');
var server= request.agent('http://localhost:3000');
var express = require('express');

describe ('get method ', function(){
    it('respond with json',function(done){
        modelStub.yields(null,[{name:"rozy",id: 3}])
        request(app)
        .get('/user')
        .expect('Content-Type',/json/)
        .end(function(err,res){
            if (err)return done(err);
            expect(res.body[0].name).to.be.equal("rozy");
            expect(res.body[0].id).to.be.equal(3);
            done();      
              });
    });
});