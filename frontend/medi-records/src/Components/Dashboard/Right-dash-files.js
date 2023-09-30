import React ,{useState}from 'react';
import '../../Styles/Dash-styles/Right_files.css';
import {fetch_data_api} from '../../api/api.js'
export default function Right_dash_files(props) {
  const [pdfSrc, setPdfSrc] = useState(null); // State to store the PDF source

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

  // Function to fetch and set the PDF source
  const handle_file = async () => {
    try {
      const response = await fetch_data_api(); // Fetch PDF data from the backend
      await setPdfSrc(response); // Set the PDF source in the state
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className='file_status'>{props.state_files}</div>
      <div className='files' >
      
        {report_data.map((report, index) => (
          <div
            className='report'
            key={index}
            onClick={handle_file}
          >
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
            <div style={{position:"fixed",right:1,top:64}}>
            <iframe
            title='pdf'
            width="100%"
            height="700vh"
            src={pdfSrc} // Set the PDF source as the src attribute
            frameborder="0"
            allowfullscreen
          ></iframe>
          </div>
      </div>
    </div>
  );
}
