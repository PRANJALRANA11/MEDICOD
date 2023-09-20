import React,{useState} from 'react'
// import {  Link } from 'react-router-dom';
import {signin_api} from '../../api/api';
import '../../Styles/Home-styles/Authentication.css';
import { Link } from 'react-router-dom';

export default function Signin() {
  const[formData,setformData]=useState({
    email: '',
    password: ''
  });

  const handleFormData=(e)=>{
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value,
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signin_api(formData);
      // console.log(response.data);
    } catch (error) {
      // console.error('Error during registration:', error);
    }
  };
  return (
    <div id='Body_signup'>
      <div className='signup'>
        <h1 className='signup_heading'>Welcome To Medicod </h1>
        <form className='form' onSubmit={handleSubmit} method="POST">
          <input placeholder='Email' name='email' type='email' required={true}
          value={formData.email}
          onChange={handleFormData}/>
          <input placeholder='Password' name='password' type='password' required={true}
          value={formData.password}
          onChange={handleFormData}/>
          <Link id='Forget-pass' to='/forgotpassword'>Forgot Password ?</Link>
          <button id='Login_btn' type='submit'>Login</button>
          <div>
            <span>Don't have an account ? <Link to='/Signup'>sign up now</Link></span>
          </div>
        </form>
      </div>
    </div>
  )
}
