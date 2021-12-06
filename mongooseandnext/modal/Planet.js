const mongoose = require('mongoose');

const PlanetSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Planet name should be provided']
  },
  moons: Number,
  LengthOfDay: Number,
});

module.exports = mongoose.models.Planet || mongoose.model('Planet', PlanetSchema);