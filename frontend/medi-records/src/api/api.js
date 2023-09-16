import React from 'react'
import axios from 'axios';
export default async function api(formData) {
  try {
    const response = await axios.post('http://127.0.0.1:80/signup', formData);
    if (response.status === 200) {
      // console.log('User has been successfully registered', response);
      // // Successful registration, you can redirect to a success page or do something else
      // history.push('/success'); // Redirect to a success page
    } else {
      // Handle error here, e.g., display an error message
      // console.error('Error during registration');
    }
  } catch (error) {
    // console.error('Error during registration:', error);
  }
  return (
    <>
    </>
  )
}
