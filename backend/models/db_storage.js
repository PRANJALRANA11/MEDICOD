const mongoose = require("mongoose");

// Schema for storing the records
const storageSchema = new mongoose.Schema({
    ReportName:{
      type:String,required:true
      },
    ClinicName:{
      type:String,required:true,unique:true
      },
      timestamp: {
        type: String,
      },
          });
const storage = new mongoose.model("Storage", storageSchema);
module.exports = storage;