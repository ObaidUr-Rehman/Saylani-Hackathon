import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// import Student from "./Student";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            <img width="40px" height="40px" style={{borderRadius:"50%",marginRight:"10px"}} src="https://saylani-welfare-uk.netlify.app/jhdjh.png" alt="" />
            SMIT
          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <Link
                to="/class"
            
                className="nav-links"
                onClick={handleClick}
              >
                Attendance
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Login"
            
                className="nav-links"
                onClick={handleClick}
              >
                Admin Login
              </Link>
            </li>
          </ul>

          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;




