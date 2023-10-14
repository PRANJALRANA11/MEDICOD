const dotenv = require("dotenv").config();  
const signup=require("../models/db_auth.js");
const storage=require("../models/db_storage.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;
const fs = require('fs').promises;

// Auth Controllers

exports.signup=async(req,res)=>{
 	try{
			const{ name, email, password }=req.body;
			// Check if user already exists
			let userexist = await signup.findOne({ email: email });
			if(!userexist){
  				const newUser = new signup({ name, email, password });
  				const User_save = await newUser.save();
  				console.log(newUser);
				const token = jwt.sign({id: newUser.id },jwtSecret,{ expiresIn: '48h' });
				res.status(200).json(newUser.name);
				}
			else{
				res.status(400).json("user already exist");
			}
    	}
	catch(error){
    	res.status(400).json("error in authentication");
    	}
}

exports.signin=async(req,res)=>{
 	try{
		const{email,password}=req.body;
		let userexist = await signup.findOne({ email: email });
		if (userexist) {
  				const isPasswordValid = await bcrypt.compare(password, userexist.password);
				if (isPasswordValid) {
					const token = jwt.sign({id: userexist.id },jwtSecret,{ expiresIn: '48h' });
					res.status(200).json(userexist.name);
				} 
  		else {
    			res.status(401).json({ message: "Invalid credentials" });
  			}
		} 	
    }
	catch(error){
    	res.status(400).json("error in authentication");
    	}
}

exports.resetpassword=async(req,res)=>{
	try {
		const email=req.user.id;
		const{password}=req.body;
		let userexist = await signup.findOne({ email: email });
		if (userexist) {
			await signup.updateOne({ email: email }, { $set: { password: password } });
			res.status(200).json("password reset successfully");
		}
		else{
			res.status(400).json("user not found");
		}
	} catch (error) {
		res.status(400).json(error.message);
	}
}

// Records Controllers
exports.save_report_details =  async (req, res) => {
	try {
	  if (!req.file) {
		return res.status(400).json({ message: 'No file uploaded' });
	  }

		const {ReportName,ClinicName,uploaded_file_name}=req.body;
		const newUser = new storage({ ReportName,ClinicName,uploaded_file_name
		,timestamp: new Date()});
  				const User_save = await newUser.save();
  				console.log(newUser);
	  		return res.status(200).json({ message: 'Report saved successfully' });
	} catch (error) {
		console.log(error.message)
	  return res.status(400).json(error.message);
	}
  }


exports.fetch_report_details = async (req, res) => {
	const {ReportName}=req.body;
  try {
		const details=await storage.find({});
		console.log(details)
		const file={
			"pdfSrc":null,
			"details":details
		}
		return res.status(200).json(file);
  	} catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.fetch_one_report_details = async (req, res) => {
	const {ReportName}=req.query;
  try {
		const details=await storage.findOne({ReportName});
		console.log(ReportName)
    	const data = await fs.readFile(`uploads/${details.uploaded_file_name}`);
    	const base64Data = data.toString('base64');
    	const pdfSrc = `data:application/pdf;base64,${base64Data}`;
		const file={
			"pdfSrc":pdfSrc,
			"details":details
		}
    	return res.status(200).json(file);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json( error.message );
  }
};

exports.delete_details = async (req, res) => {
	const {ReportName}=req.query;
  try {
		const details=await storage.findOne({ReportName});
		if(details){
			await fs.unlink(`uploads/${details.uploaded_file_name}`);
		}
		// console.log(details)
		const delete_file=await storage.deleteOne({ReportName});
		console.log(delete_file)
    	return res.status(200).json("file deleted successfully");
  } catch (error) {
    console.log(error.message);
    return res.status(500).json( error.message );
  }
};