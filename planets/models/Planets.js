const mongoose = require("mongoose");

const PlanetSchema = new mongoose.Schema({
  PlanetName: {
    type: String,
    required: [true, "Planet name is required."],
    unique: true,
    trim: true,
    maxlength: [20, "The maximum Lenght is 20 chars."],
  },
  NumberOfMoon: {
    type: Number,
    required: [true, "Number of moon is required."],
  },
  LengthOfDay: {
    type: Number,
    required: [true, "Length of day is required."],
  },
});

module.exports =
  mongoose.models.Planets || mongoose.model("Planets", PlanetSchema);

//   const planets = mongoose.model("planets", PlanetSchema);
// module.exports = planets;
