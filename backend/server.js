
// importing package
const dotenv = require("dotenv").config();  
const bodyparser = require("body-parser");  
const mongoose = require("mongoose");       
const express = require("express");         
const app = express();  


// Using Routers
const router=require('./Routes/routes'); 

// Using middlewares
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router);

// Connecting to Database
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.pbqxnfj.mongodb.net/?retryWrites=true&w=majority `
  );
  console.log("database is connected");
}

// Listening to the server
const port=80||8000
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});


