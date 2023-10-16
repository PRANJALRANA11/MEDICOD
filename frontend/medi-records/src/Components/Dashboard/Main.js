import React from 'react'
import  '../../Styles/Dash-styles/Main.css'
import {store_data_api} from '../../api/api.js'

export default function Main() {
  const [report_details,set_report_details]=React.useState({
      ReportName:" ",
      ClinicName:" ",
      uploaded_file:null,
  })

  const [errors, setErrors] = React.useState({});
  const [save_btn_text,set_save_btn_text]=React.useState("Save")

  function HandleChange(e){
    const { name, value } = e.target;
    set_report_details({...report_details,[name]:value})
  }

  const validateForm = () => {
    let valid = true;
    const newErrors = {};

    if (report_details.ReportName.trim() === '') {
      newErrors.ReportName = 'Report Name is required';
      valid = false;
    }

    if (report_details.ClinicName.trim() === '') {
      newErrors.ClinicName = 'Clinic Name is required';
      valid = false;
    }

    if (report_details.uploaded_file == null) {
      newErrors.uploaded_file = 'Please upload a file';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const  HandleSubmit = async(e)=>{
      e.preventDefault();
      if (validateForm()) {
      try {
        const formData = new FormData(); // Create a FormData object for file upload
        formData.append('ReportName', report_details.ReportName);
        formData.append('ClinicName', report_details.ClinicName);
        formData.append('uploaded_file', report_details.uploaded_file);
        formData.append('uploaded_file_name', report_details.uploaded_file_name);
        const response = await store_data_api(formData);
        if(response.status===200){
        set_save_btn_text("Saved Successfully")
        }
        // console.log(response.data);
      } catch (error) {
        setErrors({ ReportName: 'Please choose another report name' });
        // console.error('Error during registration:', error);
      }
    }
  }

  return (
    <div className='Home_Dash'>
      <div className='Heading'>
        Home
      </div>
      <form  onSubmit={HandleSubmit} method='POST' encType="multipart/form-data">
        <label style={{marginRight:"50rem"}}>Report Name</label>
      <div className='Report_Title'>
        <input type='text' onChange={HandleChange} value={report_details.ReportName} 
        className='Report_input' name='ReportName' 
        placeholder='Enter Your Type of Report eg X-Ray, CT-scan, MRI ...' 
        required={true}></input>
        {errors.ReportName && (
            <div className="error" style={{ color: 'red', paddingBottom: '1rem' }}>
              {errors.ReportName}
            </div>
          )}
      </div>
        <label style={{marginRight:"51rem"}}>Clinic Name</label>
      <div className='Clinic_Title'>
        <input type='text'  className='Report_input' 
        onChange={HandleChange} name='ClinicName' 
        value={report_details.ClinicName} required={true} 
        placeholder='Enter the name of clinic or hospital'></input>
        {errors.ClinicNameName && (
            <div className="error" style={{ color: 'red', paddingBottom: '1rem' }}>
              {errors.ClinicNameName}
            </div>
          )}
      </div>
        <label style={{marginRight:"43rem"}}>Upload Your Document</label>
      <div className='Appointment'>
        <div>
        <input
              className='Save_doc_button'
              style={{ width: '12rem', backgroundColor: '#3f66f9',cursor:"pointer" }}
              name="uploaded_file"
              onChange={(e) => {
                const selectedFile = e.target.files[0];
                if (selectedFile) {
                  const fileName = selectedFile.name;            
                  // Update the state with the selected file
                  set_report_details({ ...report_details, uploaded_file_name: fileName, uploaded_file: e.target.files[0] });
                }
              }}
              // Use e.target.files[0] to access the selected file
              placeholder='Upload Your Report'
              type='file'
            />
            {errors.uploaded_file && (
            <div className="error" style={{ color: 'red', paddingBottom: '1rem' }}>
              {errors.uploaded_file}
            </div>
          )}
            <button className='Save_doc_button' type='submit' >{save_btn_text}</button>
        </div>
      </div>
      <div className='Save_doc'>
  
      </div>
      </form>
    </div>
  )
}
