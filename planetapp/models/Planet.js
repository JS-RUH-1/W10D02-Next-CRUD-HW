const mongoose =require("mongoose")

const PlanetSchema = new mongoose.Schema({
    PlanetName:{
        type: String,
        required: [true, "please add Planet"], 
    }, 
    NumberOfMoon:{
        type: Number,
        required: true,
        default:0
    },
    LengOfDay:{
        type: Number,
        required: true,
    }
})

module.exports = mongoose.models.Planet || mongoose.model("Planet", PlanetSchema);