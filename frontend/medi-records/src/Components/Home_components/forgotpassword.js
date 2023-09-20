import React,{useState} from 'react'
import {Email_Verification_api} from '../../api/api';

export default function Forgotpassword() {

  const[formData,setformData]=useState({
    email: ''
  });

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
      const response = await  Email_Verification_api(formData);
 

      setSuccessMessage('Your email has been received. Check your inbox for further instructions.');
      // console.log(response.data);
    } catch (error) {
      // console.error('Error during registration:', error);
    }
  };



  return (
    <div id='Body_signup'>
      <div className='signup' style={{
        height:"23rem"
      }}>
        <h1 className='signup_heading'>Reset Your Password </h1>
        <form className='form' onSubmit={handleSubmit} method="POST">
          <input placeholder='Email' name='email' type='email' required={true}
          value={formData.email}
          onChange={handleFormData}/>
          <button id='Login_btn'  type='submit'>SEND</button>
          {successMessage && <p className='success-message' style={{color:"#fff"}}>{successMessage}</p>}
        </form>
      </div>
    </div>
  )
}
