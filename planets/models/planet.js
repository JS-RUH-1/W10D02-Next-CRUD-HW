const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
  PlanetName: String,
  NumberOfMoon: Number,
  LengthOfDay: Number,
});

module.exports = mongoose.model("Planet", PlanetSchema);
