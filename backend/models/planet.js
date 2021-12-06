const mongoose = require('mongoose')

const planetSchema = new mongoose.Schema({
    PlanetName: {
        type: String,
        unique:true,
        required: [true, 'Please enter a planet name']
    }
    ,NumberOfMoon: {
        type: String,
        required: [true, 'Please enter number of moons']
    }
    ,LengthOfDay: {
        type: String,
        required: [true, 'Please enter the day length']
    }
});

const Planet = mongoose.model('planet',planetSchema)
module.exports = Planet