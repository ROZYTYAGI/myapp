let express = require('express');
let User = require('../model/schema');
let router = express.Router();

router.post('/user', (req, res)=>{
    let newUser = new User();
    newUser.name = req.body.name;
    newUser.id = req.body.id;

    newUser.save((err, user)=>{
        if (err) {
            res.send('error occured');
        } else {
            console.log(user);
            res.send(user);
        }
    });
});

module.exports=router;