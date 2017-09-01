const assert=require('chai').assert;
const supertest=require('supertest');
const app=require('../app');
const express=require('express');


const url=supertest('http://localhost:3000');

describe('multiply function',(err)=>{
	it('should multiply values',function(done){
url
.post('/6/6')
.end((err,res)=>{
	if(err){
		throw err;
	}
	assert.equal(res.text,36,'testing clear');
	done();
});
});
});