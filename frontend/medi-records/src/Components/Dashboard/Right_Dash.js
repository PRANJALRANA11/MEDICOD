import React,{useState} from 'react'
import '../../Styles/Dash-styles/Right_Dash.css'; // Import the CSS file for the Right_Dash component
import ProgressBar from './ProgressBar';
import Right_dash_files from './Right-dash-files';
import Main from './Main';

export default function Right_Dash() {

    const [state_files, set_state_files] = useState("");
    const [screen, set_screen] = useState(<Main/>);

    const Handle_saved_files = () => {
        set_state_files("Saved files");
        
    }
    const Handle_screen=()=>{
        set_screen(<Right_dash_files state_files={state_files}/>)
    }
    const Handle_home=()=>{
        set_screen(<Main/>)
    }
 
  return (
    <>
        {screen}
        <div className='Side_bar_right'>
            <div className='right-content'>
                <p onClick={Handle_home}>Home</p>
            </div>
            <div className='right-content'>
                <p onClick={() => { Handle_saved_files(); Handle_screen(); }}>Saved files</p>
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
