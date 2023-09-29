const mongoose = require("mongoose");

const storageSchema = new mongoose.Schema({
    ReportName:{
      type:String,required:true
      },
    ClinicName:{
      type:String,required:true,unique:true
      },
          });
const storage = new mongoose.model("Storage", storageSchema);
module.exports = storage;