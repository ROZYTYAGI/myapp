let mongoose=require('mongoose');
let Schema=mongoose.Schema;

let newUser=new Schema({
	name: String,
	id: Number
});

module.exports=mongoose.model('User',newUser);