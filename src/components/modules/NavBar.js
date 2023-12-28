import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { GoogleLogin, googleLogout } from "@react-oauth/google";
import NavBarDropdown from "./NavBarDropdown.js";

import "../../utilities.css";
import "./NavBar.css";

import socLogo from "../../img/logo/chemengsoc_logo.png";
import constitutionPDF from "../../data/chemengsoc_constitution.pdf";

function NavBar () {
  // ( userId, handleLogin, handleLogout )

  const displayminwidth = 960;

  // // login
  // const login = useGoogleLogin({
  //   onSuccess: () => handleLogin,
  //   onError: err => console.log(err),
  //   flow: 'auth-code',
  // });

  // hamburger menu
  const [click, setClick] = useState(false);
  const [dropdownWhatsOn, setDropdownWhatsOn] = useState(false);
  const [dropdownAbout, setDropdownAbout] = useState(false);
  const [dropdownWelfare, setDropdownWelfare] = useState(false);
  // const [dropdownEA, setDropdownEA] = useState(false); // for external affairs page

  const closeMobileMenu = () => setClick(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const collapseAfterClick = () => {
    closeMobileMenu();
    scrollToTop();
  }

  return (
    <>
      <nav className="navbar-container">
          <div >
            <Link to="/" className="navbar-title u-inlineBlock" onClick={scrollToTop}>
              <div className="navbar-logo-container"> <img src={socLogo} className="navbar-logo" alt="martlet"/> </div>
              <span className="navbar-title-full">Imperial College London <br/> ChemEngSoc</span> 
              <span className="navbar-title-short">Univ WCR</span> 
            </Link>
          </div>

          <div className="navbar-menu-icon" onClick={() => setClick(!click)}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}/>
          </div>

          <ul className={click ? "navbar-menu active" : "navbar-menu"}>

            <li className="navbar-item"> 
              <Link to="/about" className="navbar-links" onClick={collapseAfterClick}>About Us</Link></li>

            <li className="navbar-item"> 
              <Link to="/committee" className="navbar-links" onClick={collapseAfterClick}>Committee</Link></li>
            
            <li className="navbar-item"> 
              <Link to="/whatson" className="navbar-links" onClick={collapseAfterClick}>Events</Link></li>

            <li className="navbar-item"> 
              <Link to="/contact" className="navbar-links" onClick={collapseAfterClick}>Contact Us</Link></li>

            {/* {userId ? (
              <li className="navbar-item">
                <Link to=`/profile/{username}` className="navbar-links" onClick = {collapseAfterClick}>Your profile</Link></li>
            ) : (<></>)} */}

            {/* <li className="navbar-item">
              {userId ? (
                <button onClick={() => {googleLogout(); handleLogout();}}> Logout </button>
              ) : (
                <GoogleLogin onSuccess={handleLogin} onError={(err) => console.log(err)} />
                // <button onClick={() => {login();}}> Login using Google </button>
              )}
            </li> */}
          </ul>
      </nav>
    </>
  );
}

export default NavBar;