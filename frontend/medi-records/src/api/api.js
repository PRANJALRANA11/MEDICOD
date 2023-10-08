// This file consist of all the api's 
import axios from 'axios';
import {signup_url,signin_url,emailverify_url,resetpassword_url,store_report_data_url,fetch_report_data_url,fetch_one_report_data_url,delete_data_url} from '../Constants/Constants.js';

// This api will be called from the frontend to register a user
export  async function Signup_api(formData) {
  try {
    const response = await axios.post(signup_url, formData);
    if (response.status === 200) {
      localStorage.setItem('token', response.data);
      console.log('User has been successfully registered', response);
      return response.status;
    } 
    else{
      console.log('User has not been successfully registered', response);
      return response.status;
    } 
  } catch (error) {
    console.error('Error during registration');
  }
}

// This api will be called from the frontend to login a user
export  async function signin_api(formData) {
  try {
    const response = await axios.post(signin_url, formData);
    if (response.status === 200) {
      localStorage.setItem('token', response.data);
      console.log('User has been successfully logged in');
      return response.status;
    }else{
      return response.status;
    }
    
  } catch (error) {
    console.error('Error during registration');
  }
}


//  This api will be called from the frontend to verify the email
export  async function Email_Verification_api(formData) {
  try {
    const response = await axios.post(emailverify_url, formData);
    if (response.status === 200) {
      localStorage.setItem('token', response.data);
    }
  } catch (error) {
    console.error('Error during verification', error);
  }
}

//  This api will be called from the frontend to reset the password
export async function Reset_password_api(formData) {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(resetpassword_url, formData, {
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

// This api will be called from the frontend to store the report data
export async function store_data_api(Data) {
  try {
    
    var response = await axios.post(store_report_data_url, Data);
    if(response.status===200){
      console.log(response.data)
      return response;
    }else{
      return response;
    }
  } catch (error) {
    console.log(response.data);
    return response;
  }

}

// This api will be called from the frontend to fetch all report data
export async function fetch_data_api() {
  try {
    var response = await axios.get(fetch_report_data_url);
    const file={
      pdfSrc:response.data.pdfSrc,
      details:response.data.details
    }
    return file;
  } catch (error) {
    console.log(response.data);
  }

}

// This api will be called from the frontend to fetch one report data
export async function fetch_one_data_api(report) {
  try {
    // console.log(ReportName)
    var response = await axios.get(fetch_one_report_data_url,{params:{ReportName:report}});
    const file={
      pdfSrc:response.data.pdfSrc,
      details:response.data.details
    }
    return file;
  } catch (error) {
    console.log(response.data);
  }

}

// This api will be called from the frontend to delete one report data
export async function delete_api(report){
  try {
    var response = await axios.delete(delete_data_url,{params:{ReportName:report}});
  } catch (error) {
    console.log(response.data);
  }
}
