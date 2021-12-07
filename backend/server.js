const express = require("express")
const app = express()
const PORT = 8080
const cors = require("cors")
app.use(cors())
app.use(express.json());
const mongoose = require("mongoose");


const planetRoute = require("./routes/planet")
app.use('/planet', planetRoute)

async function main() {
    await mongoose.connect('mongodb+srv://Khaled:alh123@cluster0.8jrln.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
  }
  main().catch((err) => console.log(err));

  app.listen(PORT, () => {
    console.log(`Connected on= http://localhost:${PORT}`);
  });