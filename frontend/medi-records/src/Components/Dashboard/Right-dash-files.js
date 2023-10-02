import React, { useState, useEffect } from 'react';
import '../../Styles/Dash-styles/Right_files.css';
import { fetch_data_api } from '../../api/api.js';
import { pdf_img_url } from './Constants';

export default function Right_dash_files(props) {
  const [pdfSrc, setPdfSrc] = useState(null); // State to store the PDF source
  const [details, setDetails] = useState([]); // Initialize details as an empty array

  // Function to fetch and set the PDF source
  const handleFile = async () => {
    try {
      const response = await fetch_data_api(); // Fetch PDF data from the backend
      setDetails(response.details);
      setPdfSrc(response.pdfSrc); // Set the PDF source in the state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFile(); // Call handleFile when the component mounts
  }, []);

  return (
    <div>
      <div className='file_status'>{props.state_files}</div>
      <div className='files'>
        {details.map((report, index) => (
          <div className='report' key={index} onClick={handleFile}>
            <div className='report_name'>
              <p>{report.ReportName}</p>
            </div>
            <div className='report_image'>
              <img src={pdf_img_url} alt='report' />
            </div>
            <div className='Report_details'>
              <div className='clinic_name'>{report.ClinicName}</div>
              <div className='upload_date'>{new Date(report.timestamp).toLocaleString()}</div>
            </div>
          </div>
        ))}
        <div style={{ position: 'fixed', right: 1, top: 64 }}>
          <iframe
            title='pdf'
            width='100%'
            height='700vh'
            src={pdfSrc} // Set the PDF source as the src attribute
            frameBorder='0'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
