import React from 'react'
// import {  Link } from 'react-router-dom';

import '../../Styles/Home-styles/Authentication.css';

export default function Signin() {
  return (
    <div id='Body_signup'>
      <div className='signup'>
        <h1 className='signup_heading'>Welcome To Medicod </h1>
        <form className='form'>
          <input placeholder='Username or Email'/>
          <input placeholder='Password'/>
          <a id='Forget-pass' href='/'>Forgot Password ?</a>
          <button id='Login_btn'>Login</button>
          <div>
            <span>Don't have an account ? <a href='/signup'>sign up now</a></span>
          </div>
        </form>
      </div>
    </div>
  )
}
