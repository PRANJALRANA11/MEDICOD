import React from 'react'
import '../../Styles/Dash-styles/Right_Dash.css'; // Import the CSS file for the Right_Dash component
import ProgressBar from './ProgressBar';
import Main from './Main';
export default function Right_Dash() {

    const Handle_click_All_files = () => {
        
    }

  return (
    <>
        <Main/>
        <div className='Side_bar_right'>
            <div className='right-content'>
                <p>All Files</p>
            </div>
            <div className='right-content'>
                <p>Saved files</p>
            </div>
            <div className='right-content'>
                <p>Shared files</p>
            </div>
            <div className='right-content'>
                <p>Deleted files</p>
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
