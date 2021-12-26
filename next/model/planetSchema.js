const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://asdf:asdf@cluster0.tve7n.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )

export default mongoose.models.Planet || mongoose.model('Planet', { 
    PlanetName: String,
    NumberOfMoon: Number,
    LengthOfDay: Number
});
