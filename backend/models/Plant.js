// PlantName
//NumberOfMoons
//LengthOfDay
const mongoose = require('mongoose');

const PlantSchema= new mongoose.Schema({

PlantName:{
    type:String,
    required:[true,'Please add a Name of plant'],
    unique:true,
    trim:true,
},
NumberOfMoons:{
    type:Number,
    required:[true,'Please add a Number of Moons']
},
LengthOfDay:{
    type:Number,
    required:[true,'Please add a Length of days']
}

})

module.exports = mongoose.models.Plant || mongoose.model('Plant',
PlantSchema)