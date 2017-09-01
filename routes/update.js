let express = require('express');
let User = require('../model/schema');
let router = express.Router();

router.put('/user/:id', (req, res)=>{
    User.update({
            _id: req.params.id
        }, { $set: { name: req.body.name } }, { upsert: true },
        (err, newUsers)=>{
            if (err) {
                console.log('error occured');
            } else {

                res.send('updated successfully');
            }

        });
});

module.exports=router;