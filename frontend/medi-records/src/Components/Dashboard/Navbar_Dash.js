import React from 'react';
import '../../Styles/Dash-styles/Navbar_Dash.css'; // Import the CSS file for the Navbar component
import { Link } from 'react-router-dom';
const Navbar_Dash = () => {
  return (
    <nav className="navbar_dash">
      <div className="container_dash">
        <div className="navbar-brand_dash">
        <Link to="/">MEDICOD</Link>
        </div>
        <ul className="navbar-links_dash">
          <li>
            <span style={{
              fontFamily:"poppins",
              fontSize:"1.2rem",
            }}>Pranjal</span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar_Dash;
