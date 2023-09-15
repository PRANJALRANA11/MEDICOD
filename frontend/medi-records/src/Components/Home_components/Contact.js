import React from 'react'
import '../../Styles/Home-styles/Contact.css'; 
export default function Contact() {
  return (
    <div className='Contact_div'>
      <div className='Upper_Contact_Box'>
        <div className='heading'>
            Let's Get In Touch
            <button style={{
                marginLeft:"28rem",
                width:"10rem",
                height:"3rem",
                borderRadius:"8px",
                fontFamily:"Poppins",
                backgroundColor:"#0f172a",
                color:"white",
            }}>contact us</button>
        </div>
      </div>
      <div className='Lower_Contact_Box'>
            <div className='Logo'>
                MEDICOD
            </div>
            <div className='description'>
                We appreciate your interest in our 
                services and look forward to hearing 
                from you. Your feedback helps us 
                improve and ensures that we continue 
                to provide you with the best possible 
                healthcare solutions. 
                Thank you for choosing us as your 
                healthcare partner.
            </div>
            <div className='social-links'>
                <i class="fa-brands fa-x-twitter fa-2xl" style={{
                    color:"white",
                    marginRight:"1rem",
                    cursor:"pointer"
                }}></i>
                <i class="fa-brands fa-instagram fa-2xl"
                style={{
                    color:"white",
                    marginRight:"1rem",
                    cursor:"pointer"
                }}></i>
                <i class="fa-brands fa-linkedin fa-2xl"
                style={{
                    color:"white",
                    marginRight:"1rem",
                    cursor:"pointer"
                }}></i>
            </div>
            <div className='horizontal-rule'></div>
            <div className='copyright'>
                &#169; 2023 Medicid. All rights reserved.
            </div>
      </div>
    </div>
  )
}
