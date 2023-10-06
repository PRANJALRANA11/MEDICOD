import React from 'react';
import '../../Styles/Home-styles/Navbar.css'; // Import the CSS file for the Navbar component
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
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
            {isAuthenticated ?  (<Link to="/Dashboard">Records</Link>):(
              <Link onClick={() => loginWithRedirect()}>Records</Link>
            
            )}
           
          </li>
          <li>
            {isAuthenticated ? (
            <Link style={{
              padding: "8px 16px",
              border: "1px solid #1d283a",
              borderRadius: "10px",
                          }}
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>Logout</Link>
            ) : (
              <Link style={{
                padding: "8px 16px",
                border: "1px solid #1d283a",
                borderRadius: "10px",
                            }}
                onClick={() => loginWithRedirect()}>Signup</Link>
            ) }
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
