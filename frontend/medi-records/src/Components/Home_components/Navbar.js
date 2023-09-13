import React from 'react';
import '../../Styles/Home-styles/Navbar.css'; // Import the CSS file for the Navbar component

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">MEDICOD</a>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="/appointments">About</a>
          </li>
          <li>
            <a href="/appointments">Contact</a>
          </li>
          <li>
            <a href="/telemedicine">Records</a>
          </li>
          <li>
            <a href='/' style={{
            padding: "8px 16px",
            border: "1px solid #1d283a",
            borderRadius: "10px",
                        }}>Signup</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
