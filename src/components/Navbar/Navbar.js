import React from "react";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const links = [
    {label: "Home", url: "/"},
    {label: "Notes", url: "/editor"},
    {label: "Contact", url: "/contact"},
  ]

  const redirectToLogin = () => {
    navigate('/login');
  }

  return (
    <div className="navbar-container">
      <div className="navbar-links">
        {links.map((link) => (
          <Link to={link.url}>{link.label}</Link>
        ))}
      </div>
      <div className="navbar-user">
        <button 
          className="navbar-loginbnt" 
          onClick={redirectToLogin}
        >
          Login
        </button>
      </div>
    </div>
  )
}

export default Navbar;