const mongoose = require('mongoose');
const Float = require('mongoose-float').loadType(mongoose);

const Report = new mongoose.Schema({
    reportId:{
        type:String,
    },
    userID:{
        type:Array,
        required:true
    },
    marketID:{
        type:String,
        required:true
    },
    marketName:{
        type:String,
        required:true
    },
    cmdtyID:{
        type:String,
        required:true
    },
    trueUnit:{
        type:String,
        required:true
    },
    marketType:{
        type:String,
        required:true,
    },
    truePrice:{
        type:Number,
        set: function (v) { return Math.round(v)},
        required:true
    },
    finalPrice:{
        type:Float,
        // set: function (v) { return Math.round(v)},
    },
    cmdtyName:{
        type:String,
        required:true,
    },
    priceUnit:{
        type:String,
        required:true
    },
    convFctr:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Report",Report);