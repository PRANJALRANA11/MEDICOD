import React from 'react'
import '../../Styles/Home-styles/Header.css'; 
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
     <header className='home_compo_header'>
        <div className='header_div'>
            <div className='heading_div'>
                <div style={{
                    backgroundColor:"rgb(15 22 41)",
                    borderRadius:"10px",
                    padding:"4px 12px",
                    width:"360px",
                    fontFamily:"'Poppins', sans-serif",
                            }}>
                    <span>
                        All Your Medical Records At One Place
                    </span>
                </div>
                <div style={{
                        width:"38rem",
                            }}>
                    <h1 style={{
                        color:"white",
                        fontSize:"3rem",
                        fontFamily:"'Poppins",
                        color:"#e1e7ef",
                                }}>
                        Effortless Medical Record Management Online
                    </h1>
                </div>
                <div
                style={{
                    width:"47rem",
                       }}>
                    <span
                    style={{
                        color:"#7f8ea3",
                        fontSize:"1.2rem",
                        marginLeft:"-15px",
                            }}>
                        Welcome to MEDICOD, 
                        where your health information is our top priority.
                        We offer a secure and user-friendly platform to store 
                        and manage your medical records online.
                    </span>
                </div>
                <div
                style={{
                    backgroundColor:"#fff",
                    borderRadius:"10px",
                    width:"109px",  
                    padding:"10px 20px",
                    fontWeight:"500",
                    fontFamily:"'Poppins', sans-serif",
                    marginTop:"30px",
                    marginLeft: "17px",
                        }}>
                    <Link to='/Dashboard' style={{
                        textDecoration:"none",
                        color:"#000",
                                        }}>
                        Get Started
                    </Link>
                </div>
                <div style={{
                    display:"flex",
                    marginTop:"50px",
                    marginLeft: "17px",
                            }}>
                    <div style={{
                        display:"flex",
                        marginRight:"30px",
                                }}>
                        <div style={{
                            backgroundColor:"#fff",
                            width:"30px",
                            height:"30px",
                            padding:"6px",
                            borderRadius:"5px",
                                    }}>
                            <i class="fa-regular fa-user fa-xl" ></i>
                        </div>
                            <span style={{
                                fontSize:"1.3rem",
                                marginLeft:"10px",
                                color:"#e1e7ef",
                                fontFamily:"'Poppins', sans-serif",
                                        }}>
                                Over 1000+ clients
                            </span>
                    </div>
                    <div style={{
                        display:"flex",
                        marginRight:"30px",
                                }}>
                        <div style={{
                            backgroundColor:"#fff",
                            width:"30px",
                            height:"30px",
                            padding:"6px",
                            borderRadius:"5px",
                                    }}>
                            <i class="fa-regular fa-circle-check fa-xl"></i>
                        </div>    
                            <span style={{
                                fontSize:"1.3rem",
                                marginLeft:"10px",
                                color:"#e1e7ef",
                                fontFamily:"'Poppins', sans-serif",
                                        }}>
                                Verified Trusted
                            </span>
                    </div>
                    <div style={{
                        display:"flex",
                                }}>
                        <div style={{
                            backgroundColor:"#fff",
                            width:"30px",
                            height:"30px",
                            padding:"6px",
                            borderRadius:"5px",
                                    }}>
                            <i class="fa-solid fa-shield fa-xl"></i>
                        </div>    
                            <span style={{
                                fontSize:"1.3rem",
                                marginLeft:"10px",
                                color:"#e1e7ef",
                                fontFamily:"'Poppins', sans-serif",
                                        }}>
                                Secure & Safe
                            </span>
                    </div>
                </div>
            </div>
            <div className='img_div'>
                <img src="/assets/doctor.png" alt='doctor_image'
                style={{
                    width:"60%",
                    height:"auto",
                    marginLeft:"200px",
                    marginTop:"70px",
                        }}>
                </img>
            </div>
        </div>
     </header> 
    </>
  )
}
