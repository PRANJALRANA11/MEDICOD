
// importing package
const dotenv = require("dotenv").config();  
const bodyparser = require("body-parser");  
const mongoose = require("mongoose");       
const express = require("express");         
const app = express();     

const router_auth=require('./Routes/routes_auth');   

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(router_auth);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster1.vxthoqp.mongodb.net/?retryWrites=true&w=majority `
  );
  console.log("database is connected");
}

const port=80||8000
app.listen(port, () => {
  console.log(`server running at port ${port}`);
});


