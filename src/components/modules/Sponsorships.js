import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../../utilities.css"
import "./Sponsorships.css";

import default_img_src from "../../img/logo/chemengsoc_logo.png";

import sponsorsData from '../../data/sponsors.json';

const Sponsors = () => {

  const [sponsors, setSponsors] = useState([]);

  const fetchsponsor = async () => {
    setSponsors(sponsorsData);
  };

  useEffect(() => {fetchsponsor();}, []);

  const scrollToTop = () => {
    setTimeout(
      function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }, 50)
  };

  return (
    <div className="sponsors-container">
        {sponsors.sort(
          (sponsor1, sponsor2) => {return sponsor1.orderOfDisplay > sponsor2.orderOfDisplay}
        ).map(
          (sponsor) => { 
          let bG
          if (sponsor.profilePicture) {
            bG = `url("${sponsor.profilePicture.url}")`;
          } else {
            bG = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${default_img_src}")`;
          }

          return (
            <div key={sponsor.id} className="sponsors-single">
              <Link to={`/sponsor/${sponsor.username}`} onClick={scrollToTop}>
              <div className="sponsors-background" style={{backgroundImage: bG}}> </div>
              <div className="sponsors-about"> 
                  <div className="name"> <b>{sponsor.name}</b> </div>
              </div>
              </Link>
            </div>
          )
        })}
    </div>
  );
};
  
export default Sponsors;