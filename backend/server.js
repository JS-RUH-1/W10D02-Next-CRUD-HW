const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const app = express();
const planetRoute = require('./routes/planetRoute')
app.use(cors());
app.use(express.json());
app.use(planetRoute)
mongoose.connect(
    "mongodb+srv://abc:Abc123@cluster0.wbdpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true//, useCreateIndex:true 
  }).then(()=>app.listen(8080,()=>{console.log("CONNECTED WITH MONGO AND SERVER HAS STARTED")})).catch((err)=>console.log("error Connecting with mongo",err))


