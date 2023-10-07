const dotenv=require("dotenv").config();
const nodemailer=require('nodemailer');
const Mailgen = require('mailgen');
const signup=require("../models/db_auth.js");
const jwtSecret = process.env.JWT_SECRET_EMAIL_VERIFY;
const jwt = require('jsonwebtoken');

// Generating The emails for password reset condition
exports.mail_otp=async(req,res)=>{
    const {email}=req.body;
    try{
      const findUser=await signup.findOne({email})
      var mailGenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'Medicod',
            link: 'https://medicod.com/'
        }});
        var email_tempelate = {
            body: {
                intro: 'Welcome to Medicod!',
                action: {
                    instructions: 'click on yes to reset your password',
                    button: {
                        color: '#22BC66',
                        text: 'Yes',
                        link: 'http://localhost:3000/resetpassword'
                    }
                },
                outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
            }
        };

        var emailBody = mailGenerator.generate(email_tempelate);

        const transporter =  nodemailer.createTransport({
            service:"gmail",
            secure: true,
            auth: {
              user: process.env.USER_EMAIL,
              pass: process.env.USER_PASS
            }
          });
          if(findUser){
            const info = await transporter.sendMail({
                from: process.env.USER_EMAIL,
                to: email, 
                subject: "Reset Your Password", 
                html: emailBody, 
          });
            const token = jwt.sign({id: findUser.email },jwtSecret,{ expiresIn: '1h' });
            return res.status(200).json(token)
        }else{
            res.status(400).json("User not found")
        }      
          }catch(err){res.status(500).json(err.message)}
        }
