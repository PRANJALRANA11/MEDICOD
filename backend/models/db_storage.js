const mongoose = require("mongoose");

const storageSchema = new mongoose.Schema({
    ReportName:{
      type:String,required:true,unique:true
      },
    ClinicName:{
      type:String,required:true
      },
      uploaded_file_name:{
        type:String,required:true
      },
      timestamp: {
        type: String,
      },
          });
const storage = new mongoose.model("Storage", storageSchema);
module.exports = storage;