const mongoose = require('mongoose')

const PlanetSchema = new mongoose.Schema({
    PlanetName: {
        type:String,
        required: [true, 'Please add name'],
    },
    NumberOfMoon: {
        type: Number,
        required: true,
    },
    LengthOfDay: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.models.Note || mongoose.model('Note', PlanetSchema)