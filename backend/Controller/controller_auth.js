const dotenv = require("dotenv").config();  
const signup=require("../models/db_auth.js");
const storage=require("../models/db_storage.js");
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
const multer = require('multer');

// Define Multer storage configuration


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
				res.status(200).json("signed up successfully");
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
					res.status(200).json({ message: "Logged in" });
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

exports.save_report_details =  async (req, res) => {
	try {
	  if (!req.file) {
		return res.status(400).json({ message: 'No file uploaded' });
	  }
		const {ReportName,ClinicName}=req.body;
		const newUser = new storage({ ReportName,ClinicName });
  				const User_save = await newUser.save();
  				console.log(newUser);
		

	  return res.status(200).json({ message: 'Report saved successfully' });
	} catch (error) {
		console.log("no file uploaded")
	  return res.status(400).json(error.message);
	}
  }
  
  
  