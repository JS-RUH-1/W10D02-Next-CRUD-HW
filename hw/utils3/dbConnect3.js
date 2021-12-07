import mongoose from 'mongoose'

// her to create connection object
const connection = {}

async function dbConnect(){
// this if check if we have connection with mongodb 
    if (connection.isConnected) {
        return
      }

      const db = await mongoose.connect('mongodb+srv://marah:1111@cluster0.qvqkq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })

      connection.isConnected = db.connections[0].readyState
}

// export for the function 
export default dbConnect  //Go to 4 => .pages/api 