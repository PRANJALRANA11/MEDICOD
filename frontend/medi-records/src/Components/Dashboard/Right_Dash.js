import React,{useState} from 'react'
import '../../Styles/Dash-styles/Right_Dash.css'; // Import the CSS file for the Right_Dash component
import ProgressBar from './ProgressBar';
import Right_dash_files from './Right-dash-files';

export default function Right_Dash() {

    const reportDetails = {
        reportName: "Report A",
        clinicName: "Clinic A",
        uploadedPhoto: "https://i.pinimg.com/originals/da/2e/db/da2edbf7c34fd73ed79784235e27aa29.png",
        uploadDate: "Saved On 23 June 2023",
        appointmentDate: "Appointment On 23 June 2023"
    }

    const [state_files, set_state_files] = useState("");
    const [report_details, set_report_details] = useState("");

    const Handle_saved_files = () => {
        set_state_files("Saved files");
        set_report_details(reportDetails);
        
    }
    const Handle_shared_files = () => {
        set_state_files("Shared files");
        set_report_details(reportDetails);
        
    }
    const Handle_deleted_files = () => {
        set_state_files("Deleted files");
        set_report_details(reportDetails);
    }

  return (
    <>
        <Right_dash_files state_files={state_files} report_details={report_details}/>
        <div className='Side_bar_right'>
            <div className='right-content'>
                <p onClick={Handle_saved_files}>Saved files</p>
            </div>
            <div className='right-content'>
                <p onClick={Handle_shared_files}>Shared files</p>
            </div>
            <div className='right-content'>
                <p onClick={Handle_deleted_files}>Deleted files</p>
            </div>
            <div className='Storage'>
                <p>Basic Plan</p>
                <div className='storage-bar'>
                    <ProgressBar/>
                </div>
                <span>0 bytes of 1GB used</span>
            </div>
        </div>
    </>
  )
}
