import React from 'react';
import '../../Styles/Home-styles/Navbar.css'; // Import the CSS file for the Navbar component
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
        <Link to="/">MEDICOD</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <Link to="/Dashboard">Records</Link>
          </li>
          <li>
            <Link to="/Signup"style={{
            padding: "8px 16px",
            border: "1px solid #1d283a",
            borderRadius: "10px",
                        }}>Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
