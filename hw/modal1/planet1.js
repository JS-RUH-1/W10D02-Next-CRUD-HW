const mongoose = require("mongoose");

const PlanetSchema =new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'planet hite you']
    },
    moon: Number,
    LengthofDay:Number
});

module.exports = mongoose.model.planet || mongoose.model('Planet', PlanetSchema)
// now go to number 2 (next.config2.js)