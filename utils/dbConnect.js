import mongoose, { Connection }  from "mongoose";

const coonection ={}
async function dbConnect(){
    if (Connection.isConnected){
        return;
    }
    const db = await mongoose.connect("mongodb+srv://HendFawaz:fawaz9080-@cluster0.8fojf.mongodb.net/Homework?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }); 
    Connection.isConnected = db.connections[0].readyState;
    console.log(Connection.isConnected);
}

export default dbConnect;