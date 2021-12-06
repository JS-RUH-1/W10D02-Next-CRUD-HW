const mongoose = require('mongoose');
const PlanetSchema = new mongoose.Schema({
    name:{
        type: String ,
        required: [true , 'please add a planet name'] ,
        unique: true,
        trim:true
    },
    NumberOfMoon:{
        type: Number ,
        required: [true , 'please add a number of moon'] ,
        trim:true
    },
    LengthOfDay:{
        type: Number ,
        required: [true , 'please add a length of day'] ,
        trim:true
    }
})
module.exports = mongoose.models.Planets || mongoose.model('Planet', PlanetSchema);