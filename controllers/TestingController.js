const mongoose = require('mongoose');

class TestingController{
    Testing(req,res) {
        console.log(Math.random(4) + 8);
        console.log(Math.ceil(Math.random(4)));
        return res.status(200).json({message:'Working Successfully'});
    }
}

module.exports = new TestingController();