import React,{useState} from 'react';
// import { Link } from 'react-router-dom';
import api from '../../api/api';
import '../../Styles/Home-styles/Authentication.css';

export default function Signup() {

  // This state is for handling the form data
  const[formData,setformData]=useState({
    name: '',
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
      const response = await api(formData);
      // console.log(response.data);
    } catch (error) {
      // console.error('Error during registration:', error);
    }
  };
  return (
    <div id='Body_signup'>
      <div className='signup'>
        <h1 className='signup_heading'>Welcome To Medicod</h1>
        <form className='form'  onSubmit={handleSubmit} method="POST">
          <input type='text' placeholder='Enter Your Name' name='name'
          value={formData.name}
          onChange={handleFormData}/>
          <input type='email' placeholder='Enter Your Email' name='email'
          value={formData.email}
          onChange={handleFormData}/>
          <input type='password' placeholder='Create Password' name='password'
          value={formData.password}
          onChange={handleFormData}/>
          <button id='Login_btn' type='submit'>Sign Up</button>
          <div>
            <span>
              Already have an account? <a href='/signin'>Sign in now</a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
