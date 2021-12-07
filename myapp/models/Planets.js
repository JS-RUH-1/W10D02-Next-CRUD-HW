const mongoose = require('mongoose');

const planets = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "pleass Create Name Planets"]
    },
    Longth: {
        type: Number
    },
    Moons:{
            type:Number
        }

})

module.exports = mongoose.models.Planets || mongoose.model("Planets" , planets )


