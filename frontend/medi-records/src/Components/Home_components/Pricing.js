import React from 'react'
import '../../Styles/Home-styles/Pricing.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
export default function Pricing() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <>
      <div className='Pricing_div'>
        <div className='Pricing_div1'>
          <div className='Pricing_div1_1'>
            <h1>Best Pricing Plan For You</h1>
          </div>
          <div className='Pricing_div1_2'>
            We ensure the best quality of medical services for our patients and
            community.
          </div>
        </div>
        <div className='Pricing_div2'>
          <div className='Pricing_div2_1'>
            <div className='Pricing_div2_1_1'>
              Basic Plan
            </div>
            <div className='Pricing_div2_1_2'>
              <div className='Pricing_div2_1_2'>
                Price : 5$/Year
              </div>
              <div className='Pricing_div2_1_2'>
                Storage:1GB
              </div>  
            </div>
            <div className='Pricing_div2_1_4'>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Secure online storage of medical records
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Access from any device
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Basic document management
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Email support
              </div>
              <div className='Section_div_1_1_4'>
              {isAuthenticated ? (
                    <Link to='/Dashboard' style={{
                        textDecoration:"none",
                        color:"#000",
                                        }}>
                        Get Started
                    </Link>
                ) : (
                    <Link style={{
                        textDecoration:"none",
                        color:"#000",
                                        }}
                        onClick={() => loginWithRedirect()}>
                        Get Started
                    </Link>
                )}
              </div>
            </div>
          </div>
          <div className='Pricing_div2_1'>
            <div className='Pricing_div2_1_1'>
              Standard Plan
            </div>
            <div className='Pricing_div2_1_2'>
              <div className='Pricing_div2_1_2'>
                Price: $15/Year
              </div>
              <div className='Pricing_div2_1_2'>
                Storage: 5GB
              </div>
            </div>                             
            <div className='Pricing_div2_1_4'>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Secure online storage of medical records
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Access from any device
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Advanced document management 
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check"  style={{marginRight:"10px"}}></i>
                Collaborative access for family members
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Priority email support
              </div>
              <div className='Section_div_1_1_4'>
              {isAuthenticated ? (
                    <Link to='/Dashboard' style={{
                        textDecoration:"none",
                        color:"#000",
                                        }}>
                        Get Started
                    </Link>
                ) : (
                    <Link style={{
                        textDecoration:"none",
                        color:"#000",
                                        }}
                        onClick={() => loginWithRedirect()}>
                        Get Started
                    </Link>
                )}
              </div>
            </div>
          </div>
          <div className='Pricing_div2_1'>
            <div className='Pricing_div2_1_1'>
              Premium Plan
            </div>
            <div className='Pricing_div2_1_2'>
              <div className='Pricing_div2_1_2'>
                Price: $25/Year
              </div>
              <div className='Pricing_div2_1_2'>
                Storage: 20GB
              </div>
            </div>
            <div className='Pricing_div2_1_4'>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Secure online storage of medical records
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Access from any device
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Advanced document management 
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Collaborative access for family members
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                Integration with healthcare providers for automatic updates
              </div>
              <div className='Pricing_div2_1_3'>
                <i class="fa-solid fa-circle-check" style={{marginRight:"10px"}}></i>
                24/7 customer support
              </div>
              <div className='Section_div_1_1_4'>
              {isAuthenticated ? (
                    <Link to='/Dashboard' style={{
                        textDecoration:"none",
                        color:"#000",
                                        }}>
                        Get Started
                    </Link>
                ) : (
                    <Link style={{
                        textDecoration:"none",
                        color:"#000",
                                        }}
                        onClick={() => loginWithRedirect()}>
                        Get Started
                    </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
