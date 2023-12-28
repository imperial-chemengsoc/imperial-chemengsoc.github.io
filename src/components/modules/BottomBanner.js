import React from "react";
import { Link } from "react-router-dom";

import "../../utilities.css";
import "./BottomBanner.css";
import ContentBlock from "./ContentBlock.js";
import ButtonFlex from "./ButtonFlex.js";
import imperialLogo from "../../img/logo/imp_logo.svg";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

const BottomBanner = () => {
  return (
      <>
      <div className="u-block u-textCenter u-darkgrey BottomBanner"> 
        <div className="BottomBanner-unionlogo">
            <a href="https://www.imperial.ac.uk"><img src={imperialLogo} alt="Imperial College London"/></a>
        </div>
        <div className="BottomBanner-sociallogo">
            <a href="mailto:guilds.chemeng@imperial.ac.uk"><i className="fa-regular fa-envelope fa-2x" title="email"></i></a>
            <a href="https://www.instagram.com/icchemengsoc/?hl=en"><i className="fa-brands fa-instagram fa-2x" title="instagram"></i></a>
            <a href="https://x.com/ICChemEngSoc"><i className="fa-brands fa-x-twitter fa-2x" title="x-twitter"></i></a>
            <a href="https://www.facebook.com/icchemengsoc"><i className="fa-brands fa-facebook fa-2x" title="facebook"></i></a>
            <a href="https://www.flickr.com/photos/chemengsoc/"><i className="fa-brands fa-flickr fa-2x" title="flickr"></i></a>
        </div>
        <div className="BottomBanner-description"> 
            <p> © 2023 Chemical Engineering Society, Imperial College London </p>
            <p> ChemEngSoc is the Imperial College Union society representing the students of the Department of Chemical Engineering at Imperial College London. </p>
            <br></br>
            <p> <Link to="/privacyaccessibility" className="author" onClick={scrollToTop}>Privacy and Accessibility</Link></p>
            <p> Website by <a href="https://gohdavid.github.io/" className="author">David 
            David</a>. Source code forked from <a href="https://samuel-chlam.github.io/newsite/#/" className="author">Samuel 
            Lam</a>. Vector icons by <a className="author" href="https://icomoon.io/app">IcoMoon</a>. </p>
        </div>
      </div>
      </>
  );
};

export default BottomBanner