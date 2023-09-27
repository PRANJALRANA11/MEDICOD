import React from 'react';
import '../../Styles/Dash-styles/Right_files.css';

export default function Right_dash_files(props) {

  const report_data = [
    {
      reportName: "Report A",
      clinicName: "Clinic A",
      uploadedPhoto: "https://i.pinimg.com/originals/da/2e/db/da2edbf7c34fd73ed79784235e27aa29.png",
      uploadDate: "Saved On 23 June 2023",
      
    },
    {
      reportName: "Report A",
      clinicName: "Clinic A",
      uploadedPhoto: "https://i.pinimg.com/originals/da/2e/db/da2edbf7c34fd73ed79784235e27aa29.png",
      uploadDate: "Saved On 23 June 2023",
      
    },
    {
      reportName: "Report A",
      clinicName: "Clinic A",
      uploadedPhoto: "https://i.pinimg.com/originals/da/2e/db/da2edbf7c34fd73ed79784235e27aa29.png",
      uploadDate: "Saved On 23 June 2023",
      
    },
    {
      reportName: "Report A",
      clinicName: "Clinic A",
      uploadedPhoto: "https://i.pinimg.com/originals/da/2e/db/da2edbf7c34fd73ed79784235e27aa29.png",
      uploadDate: "Saved On 23 June 2023",
    },
    {
      reportName: "Report A",
      clinicName: "Clinic A",
      uploadedPhoto: "https://i.pinimg.com/originals/da/2e/db/da2edbf7c34fd73ed79784235e27aa29.png",
      uploadDate: "Saved On 23 June 2023",
    },
    {
      reportName: "Report A",
      clinicName: "Clinic A",
      uploadedPhoto: "https://i.pinimg.com/originals/da/2e/db/da2edbf7c34fd73ed79784235e27aa29.png",
      uploadDate: "Saved On 23 June 2023",
    },
  
  ]
  return (
    <div>
      <div className='file_status'>{props.state_files}</div>
      <div className='files'>
      {report_data.map((report, index) => (
        
          <div className='report'  key={index}>
            <div className='report_name'>
              <p>{report.reportName}</p>
            </div>
            <div className='report_image'>
              <img src={report.uploadedPhoto} alt='report' />
            </div>
            <div className='Report_details'>
              <div className='clinic_name'>{report.clinicName}</div>
              <div className='upload_date'>{report.uploadDate}</div>
            </div>
          </div>
      ))}
      </div>
    </div>
  );
}
