import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }
  //   console.log(process.env.MONGO_URI);
  const db = await mongoose.connect(
    "mongodb+srv://admin:admin@tuwaiq.fbctf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  connection.isConnected = db.connections[0].readyState;
  //   console.log(connection.isConnected);
}

export default dbConnect;
