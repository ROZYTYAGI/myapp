let express = require('express');
let router = express.Router();
let bodyParser=require('body-parser');
let app=require('../app');

router.post('/:id1/:id2',(req,res)=>{
	var n1=parseFloat(req.params.id1);
	var n2=parseFloat(req.params.id2);
	var multi= n1*n2;
	res.send(multi.toString());
});

module.exports=router;
