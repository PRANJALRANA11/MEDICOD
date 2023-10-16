import React, { useState } from 'react';
import { signin_api } from '../../api/api';
import '../../Styles/Home-styles/Authentication.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Signin() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (formData.email.trim() === '') {
      newErrors.email = 'Email is required';
      valid = false;
    }

    if (formData.password.trim() === '') {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await signin_api(formData);
        if (response === 200) {
          console.log(response.data);
          navigate('/Dashboard');
        }
      } catch (error) {
        setErrors({ email: 'Invalid Credentials' });
        console.error('Error during login:', error);
      }
    }
  };

  return (
    <div id="Body_signup">
      <div className="signup">
        <h1 className="signup_heading">Welcome To Medicod</h1>
        <form className="form" onSubmit={handleSubmit} method="POST">

        {errors.email && (
            <div className="error" style={{ color: 'red', paddingBottom: '1rem' }}>
              {errors.email}
            </div>
          )}

          <input
            placeholder="Email"
            name="email"
            type="email"
            required={true}
            value={formData.email}
            onChange={handleFormData}
          />
       

          <input
            placeholder="Password"
            name="password"
            type="password"
            required={true}
            value={formData.password}
            onChange={handleFormData}
          />
          {errors.password && (
            <div className="error" style={{ color: 'red', paddingBottom: '1rem' }}>
              {errors.password}
            </div>
          )}

          <Link id="Forget-pass" to="/forgotpassword">
            Forgot Password ?
          </Link>
          <button id="Login_btn" type="submit">
            Login
          </button>
          <div>
            <span>
              not signed up yet <Link to="/Signup">Sign up now</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
