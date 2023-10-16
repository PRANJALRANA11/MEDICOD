import React, { useState, useEffect } from 'react';
import '../../Styles/Dash-styles/Right_files.css';
import { fetch_data_api, fetch_one_data_api, delete_api } from '../../api/api.js';
import { pdf_img_url } from '../../Constants/Constants.js';

export default function Right_dash_files(props) {
  const [pdfSrc, setPdfSrc] = useState(null);
  const [details, setDetails] = useState([]);

  const handleFile = async () => {
    try {
      const response = await fetch_data_api();
      setDetails(response.details);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (ReportName) => {
    try {
      const response = await fetch_one_data_api(ReportName);
      setPdfSrc(response.pdfSrc);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = async (ReportName) => {
    try {
      // Delete the report from the backend
      await delete_api(ReportName);
      
      // Filter out the deleted report from the details array
      const updatedDetails = details.filter((report) => report.ReportName !== ReportName);
      setDetails(updatedDetails);
      if(updatedDetails.length===0){
        setPdfSrc(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFile();
  }, []);

  return (
    <div>
      <div className='file_status'>{props}</div>
      <div className='files'>
        {details.map((report, index) => (
          <div className='report' key={index}>
            <div onClick={() => handleClick(report.ReportName)}>
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
            <div className='delete_btn_div'>
              <button
                className='Save_doc_button'
                onClick={() => handleDeleteClick(report.ReportName)}
                style={{ backgroundColor: "red", width: "9rem", marginTop: "1rem" }}
              >
                Delete Report
              </button>
            </div>
          </div>
        ))}
        <div style={{ position: 'fixed', right: 1, top: 64 }}>
          <iframe
            title='pdf'
            width='100%'
            height='700vh'
            src={pdfSrc}
            frameBorder='0'
          ></iframe>
        </div>
      </div>
    </div>
  );
}
