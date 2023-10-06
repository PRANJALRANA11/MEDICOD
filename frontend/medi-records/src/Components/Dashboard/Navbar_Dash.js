import React from 'react';
import '../../Styles/Dash-styles/Navbar_Dash.css'; // Import the CSS file for the Navbar component
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const Navbar_Dash = () => {
  const { isAuthenticated,user } = useAuth0();
  return (
    
    <>
    <nav className="navbar_dash">
      <div className="container_dash">
        <div className="navbar-brand_dash">
          <Link to="/">MEDICOD</Link>
        </div>
        <div className="navbar-search">
          <i class="fa-solid fa-magnifying-glass" style={{fontSize:14,marginRight:10,color:"#757587"}}></i>
          <input type="text" placeholder="Search" />
        </div>
        <ul className="navbar-links_dash">
          <li>
            <i class="fa-solid fa-question" style={{
              fontSize:"1.2rem",
              marginTop:5
            }}></i>
          </li>
          <li>
            <i class="fa-regular fa-bell" style={{
              fontSize:"1.2rem",
              marginTop:5
            }}></i>
          </li>
          <li>
            {isAuthenticated && 
            <span style={{
              fontFamily:"poppins",
              fontSize:"1.2rem",
            }}>{user.name}</span>
          }
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar_Dash;
