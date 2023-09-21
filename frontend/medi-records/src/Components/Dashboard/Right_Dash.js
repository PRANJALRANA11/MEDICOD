import React from 'react'
import '../../Styles/Dash-styles/Right_Dash.css'; // Import the CSS file for the Right_Dash component
export default function Right_Dash() {
  return (
    <div className='Side_bar_right'>
        <div className='New_doc'>
            <button><i class="fa-regular fa-file" style={{marginRight:"5px"}}></i> 
            New Doc</button>
        </div>
        <div className='Preview_Doc'>
            <p>Preview Doc</p>
            <div className='Live-doc-preview'></div>
        </div>
      
    </div>
  )
}
