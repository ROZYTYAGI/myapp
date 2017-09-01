const assert=require('chai').assert;

let apptest=require('../apptest').msg;

let sum=require('../apptest').sum;

describe('App',function(){
	it('apptest should return hello',function(){
		assert.equal(apptest(),'hello');
	});
	it('apptest should return 6',function(){
		assert.equal(sum(2,3),6);
	});
});

	