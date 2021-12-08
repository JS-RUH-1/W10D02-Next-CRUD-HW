import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(
    "mongodb+srv://yazeed1122:yazeed1122@mangodb.ju3ap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
