const mongoose = require("mongoose");

mongoose.connect(
    "mongodb+srv://123:123@cluster0.ieg5j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )

export default mongoose.models.Planet || mongoose.model('Planet', { 
    PlanetName: String,
    NumberOfMoon: Number,
    LengthOfDay: Number
});
