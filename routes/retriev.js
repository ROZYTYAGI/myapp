let express = require('express');
let User = require('../model/schema');
let router = express.Router();

router.get('/user', (req, res)=>{
    User.find((err, users)=>{
            if (err) {
                res.send('error has occured');
            } else {
                console.log(users);
                res.send(users);
            }
        });
});

module.exports=router;