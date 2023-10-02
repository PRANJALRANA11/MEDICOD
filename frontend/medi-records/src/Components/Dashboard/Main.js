import React from 'react'
import  '../../Styles/Dash-styles/Main.css'
import {store_data_api} from '../../api/api.js'

export default function Main() {
  const [report_details,set_report_details]=React.useState({
      ReportName:" ",
      ClinicName:" ",
      uploaded_file:null,
  })

  function HandleChange(e){
    const { name, value } = e.target;
    set_report_details({...report_details,[name]:value})
  }

  const  HandleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const formData = new FormData(); // Create a FormData object for file upload
        formData.append('ReportName', report_details.ReportName);
        formData.append('ClinicName', report_details.ClinicName);
        formData.append('uploaded_file', report_details.uploaded_file);
        formData.append('uploaded_file_name', report_details.uploaded_file_name);
        const response = await store_data_api(formData);
        // console.log(response.data);
      } catch (error) {
        // console.error('Error during registration:', error);
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
      </div>
        <label style={{marginRight:"56rem"}}>Clinic</label>
      <div className='Clinic_Title'>
        <input type='text'  className='Report_input' 
        onChange={HandleChange} name='ClinicName' 
        value={report_details.ClinicName} required={true} 
        placeholder='Enter the name of clinic or hospital'></input>
      </div>
        <label style={{marginRight:"43rem"}}>Upload Your Document</label>
      <div className='Appointment'>
        <div>
        <input
              className='Save_doc_button'
              style={{ width: '9rem', backgroundColor: '#3f66f9' }}
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
        </div>
      </div>
      <div className='Upload_doc'>
      </div>
      <div className='Save_doc'>
        <button className='Save_doc_button' type='submit' >Save</button>
        <button className='Save_doc_button' 
        style={{width:"9rem",backgroundColor:"red"}}>Discard and New</button>
      </div>
      </form>
    </div>
  )
}
