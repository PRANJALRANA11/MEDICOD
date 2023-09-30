
import axios from 'axios';

export  async function signup_api(formData) {
  try {
    const response = await axios.post('http://127.0.0.1:80/signup', formData);
    if (response.status === 200) {
      console.log('User has been successfully registered', response);
      // history.push('/success'); // Redirect to a success page
    } 
  } catch (error) {
    console.error('Error during registration');
  }
}

export  async function signin_api(formData) {
  try {
    const response = await axios.post('http://127.0.0.1:80/signin', formData);
    if (response.status === 200) {
      console.log('User has been successfully logged in');
      // history.push('/success'); // Redirect to a success page
    }
  } catch (error) {
    console.error('Error during registration');
  }
}

export  async function Email_Verification_api(formData) {
  try {
    const response = await axios.post('http://127.0.0.1:80/emailverify', formData);
    if (response.status === 200) {
      localStorage.setItem('token', response.data);
      // history.push('/success'); // Redirect to a success page
    }
  } catch (error) {
    console.error('Error during verification', error);
  }
}

export async function Reset_password_api(formData) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post('http://127.0.0.1:80/resetpassword', formData, {
      headers: {
        'EmailVerify': token,
      },
    });
    if (response.status === 200) {
      console.log('Password reset succcessfully');
      return response.status;
    }else{
      console.log('Password reset failed');
      return response.status;
    } 
  } catch (error) {
    console.error('Error during reset password', error);
    
  }
}

export async function store_data_api(Data) {
  try {
    var response = await axios.post('http://127.0.0.1:80/store_report_data', Data);
    console.log(response.data)
  } catch (error) {
    console.log(response.data);
  }

}
export async function fetch_data_api() {
  try {
    var response = await axios.get('http://127.0.0.1:80/fetch_report_data');
    return response.data
  } catch (error) {
    console.log(response.data);
  }

}
