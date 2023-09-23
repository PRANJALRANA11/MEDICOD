import React from 'react'
import  '../../Styles/Dash-styles/Main.css'

export default function Main() {
  return (
    <div className='Home_Dash'>
      <div className='Heading'>
        Home
      </div>
        <label style={{marginRight:"50rem"}}>Report Name</label>
      <div className='Report_Title'>
        <input type='text' className='Report_input' placeholder='Enter Your Type of Report eg X-Ray, CT-scan, MRI ...'></input>
      </div>
        <label style={{marginRight:"56rem"}}>Clinic</label>
      <div className='Clinic_Title'>
        <input type='text' className='Report_input' placeholder='Enter the name of clinic or hospital'></input>
      </div>
        <label style={{marginRight:"36rem"}}>Select Appointment Date if any</label>
      <div className='Appointment'>
        <div>
            <button>Select Date</button>
        </div>
        <div>
            <button className='Save_doc_button' style={{width:"9rem",backgroundColor:"#3f66f9"}}>Upload Your Report</button>
        </div>
      </div>
      <div className='Upload_doc'>
       
      </div>
      <div className='Save_doc'>
        <button className='Save_doc_button'>Save</button>
        <button className='Save_doc_button' style={{width:"9rem",backgroundColor:"red"}}>Discard and New</button>
      </div>

    </div>
  )
}
