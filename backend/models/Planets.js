const mongoose = require("mongoose")

const planetsSchema = new mongoose.Schema({
    planetName: {
        type: String,
        required: [true, "username should be provided"],
        unique: true,
    },
    numberOfMoon: {
        type: Number
    },
    lengthOfDay: {
        type: Number
    }
})

const planet = mongoose.model('planet', planetsSchema)

module.exports = {planet}