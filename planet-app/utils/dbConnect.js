import mongoose from 'mongoose';

const connection = {};

async function dbConnect(){
    if(connection.isConnected){
        return;
    }

    //else 
    const db = await mongoose.connect("mongodb+srv://mahadb:maha1312@cluster0.ghbvs.mongodb.net/planets?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    connection.isConnected = db.connections[0].readyState;
    console.log(connection.isConnected);

}

export default dbConnect;