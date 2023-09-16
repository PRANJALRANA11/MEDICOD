const dotenv = require("dotenv").config();  
const signup=require("../models/db_auth.js");
const bcrypt = require('bcryptjs');
const jwtSecret = process.env.JWT_SECRET;
const jwt = require('jsonwebtoken');
exports.signup=async(req,res)=>{
	// This function handles user registration by checking if the provided email exists in the database.
	const{name,email,password}=req.body;
 	try{
		let userexist = await signup.findOne({ email: email });
// If the email exists, it checks the provided password's validity.
		if (userexist) {
  				const isPasswordValid = await bcrypt.compare(password, userexist.password);
  		
// If both the email and password are valid, it responds with a message that the user already exists.
				if (isPasswordValid) {
    			res.status(200).json({ message: "User already exists." });
  		} 
  		else {
    // Handle the case where the email exists but the password is incorrect
    			res.status(401).json({ message: "Invalid password." });
  }
		} 
		else {
  				const con = new signup({ name, email, password });
  				const cont = await con.save();
  				console.log(con);
				const token = jwt.sign({id: con.id },jwtSecret,{ expiresIn: '48h' });
				  // Send the token to the client
				res.status(200).json("signed up successfully");
			}
			
    }
	catch(error){
    	res.status(400).json(error.message);
    	}
}