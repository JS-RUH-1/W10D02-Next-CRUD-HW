const mongoose = require('mongoose')

const connectDB = handler => async (req, res) => {
    if (mongoose.connections[0].readyState) {
      // Use current db connection
      return handler(req, res);
    }
    // Use new db connection
    await mongoose.connect("mongodb+srv://turki:turki@cluster0.rmy2j.mongodb.net/Plantes?retryWrites=true&w=majority", {});
    return handler(req, res);
};
  
export default connectDB;