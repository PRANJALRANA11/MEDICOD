import React,{useState} from 'react'
import { Reset_password_api } from '../../api/api';
import '../../Styles/Home-styles/Authentication.css';
import { Link } from 'react-router-dom';

export default function Resetpassword() {
  // state for form data
  const[formData,setformData]=useState({
    password: ''
  });
  // state for success message
  const [successMessage, setSuccessMessage] = useState('');

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
      const response = await Reset_password_api(formData);
      setSuccessMessage('Your password has been reset');
      // console.log(response.data);
    } catch (error) {
      // console.error('Error during registration:', error);
    }
  };

  return (
    <div id='Body_signup'>
      <div className='signup' style={{
        height:"25rem"
      }}>
        <h1 className='signup_heading'>Reset Your Password </h1>
        <form className='form' onSubmit={handleSubmit} method="POST">
          <input placeholder='Reset Password' name='password' type='password' required={true}
          value={formData.password}
          onChange={handleFormData}/>
          <button id='Login_btn' type='submit'>RESET</button>
          {successMessage && <p className='success-message' style={{color:"#fff"}}>{successMessage} <Link to="/Signin" style={{textDecoration:"none",color:"#4545fc"}}>Please Login </Link></p>}
        </form>
      </div>
    </div>
  )
}

