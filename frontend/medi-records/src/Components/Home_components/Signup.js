import React, { useState } from 'react';
import { Signup_api } from '../../api/api';
import '../../Styles/Home-styles/Authentication.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
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

    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'Name should only contain letters and spaces';
      valid = false;
    }

    if (formData.password.length < 8) {
      newErrors.password = 'Password should be at least 8 characters';
      valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is not in the right format';
      valid = false;
    }

    setErrors(newErrors);

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const response = await Signup_api(formData);
        if (response === 200) {
          navigate('/Dashboard');
          console.log(response.data);
        } else {
          setErrors({ email: 'This user already exists. Please try with different email address.' });
        }
      } catch (error) {
        // Handle the registration error
        console.error('Error during registration:', error);
      }
    }
  };

  return (
    <div id="Body_signup">
      <div className="signup">
        <h1 className="signup_heading">Welcome To Medicod</h1>
        <form className="form" onSubmit={handleSubmit} method="POST">
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            required={true}
            value={formData.name}
            onChange={handleFormData}
          />
          {errors.name && <div className="error" style={{color:"red",paddingBottom:"1rem"}}>{errors.name}</div>}
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            required={true}
            value={formData.email}
            onChange={handleFormData}
          />
          {errors.email && <div className="error" style={{color:"red",paddingBottom:"1rem"}}>{errors.email}</div>}
          <input
            type="password"
            placeholder="Create Password"
            name="password"
            required={true}
            value={formData.password}
            onChange={handleFormData}
          />
          {errors.password && <div className="error" style={{color:"red"}}>{errors.password}</div>}
          <button id="Login_btn" type="submit">
            Sign Up
          </button>
          <div>
            <span>
              Already have an account? <Link to="/Signin">Sign in now</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
