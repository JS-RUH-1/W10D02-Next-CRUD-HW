const mongoose = require ("mongoose")
const Schema = mongoose.Schema;



const planetSchema = new Schema 
({
    PlanetName: { type: String },
    NumberOfMoon: { type: Number },
    LengthOfDay: { type: Number },
    img: { type: String }
})

 
module.exports = mongoose.models.Planet || mongoose.model('Planet', planetSchema);
