const mongoose = require('mongoose');

const Trigger = async() => {
    await mongoose.connect(`${process.env.DB_URL}`).then(() => {
        console.log('Connected Successfully');
    }).catch((err) => {
        console.log(err);
    });
}

module.exports = Trigger;