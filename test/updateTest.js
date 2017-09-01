var expect =require('chai').expect;
var app = require('../app');
var request= require('supertest');
var sinon = require('sinon');
var customer = require('../model/schema');
var modelStub = sinon.stub(customer,'update');

var express = require('express');

describe ('put method ', function(){
    
        beforeEach((done)=>{
        modelStub.withArgs({'_id':'abcd'},{$set:{"name":"rozy","id":333}})
        .yields(null,
            {"ok":1,
            "nModified":1,
            "n":1
        
        });

     done();   
    });

        it('respond with json',function(done){
        request(app)
        .put('/user/abcd')
        /*.expect('Content-Type',/json/)*/
        .send({"name":"rozyy","id":333})
        .end(function(err,res){
            if (err)return err;
            expect(res.body.ok).to.be.equal(2);
                  
              });
done();
    });
});