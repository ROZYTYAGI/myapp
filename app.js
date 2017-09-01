let express = require('express');
let bodyParser = require('body-parser');
let path = require('path')
let app = express();
let mongoose = require('mongoose');
let index=require('./routes/index');
let retriev=require('./routes/retriev');
let update=require('./routes/update');
let del=require('./routes/delete');
let multi=require('./routes/appMulti')
//connectivity of expres with mongoose
let myUrl = "mongodb://localhost/NextmUsers"
mongoose.connect(myUrl);

//body parser to parse web page
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',index);
app.use('/',retriev);
app.use('/',update);
app.use('/',del);
app.use('/',multi);

/*app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));
*/
app.listen('3000', ()=>{
    console.log('come at server 3000');
});

module.exports=app;