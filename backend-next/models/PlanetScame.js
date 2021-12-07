const mongoose = require ("mongoose")

const PlanetSchema = new mongoose.Schema ({
    planetName: { type: String, required: true },
    numberOfMoon: { type: Number, required: true },
    lengthOfDay: { type: Number, required: true },
})

 
mongoose.models = {};

const Planet = mongoose.model('Planet', PlanetSchema);

export default Planet;