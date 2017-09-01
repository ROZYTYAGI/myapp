let express = require('express');
let User = require('../model/schema');
let router = express.Router();

router.delete('/user/:id', (req, res)=>{
    User.findOneAndRemove({
        _id: req.params.id
    }, (err, users)=>{
        if (err) {
            console.log('error occured');
        } else {

            res.send('delete successfully');
        }

    });
});

module.exports=router;