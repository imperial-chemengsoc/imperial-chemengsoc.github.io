import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

import "../../utilities.css"
import "./PastComm.css";

import default_img_src from "../../img/logo/chemengsoc_logo.png";

import pastCommitteeData from '../../data/past_committee.json';

const PastCommittee = () => {

  const [previousComm, setPreviousComm] = useState([]);

  const fetchComm = async () => {
    setPreviousComm(pastCommitteeData.data);
  };

  useEffect(() => {fetchComm();}, []);

  // const scrollToTop = () => {
  //   setTimeout(
  //     function () {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth"
  //     })
  //   }, 50)
  // };

  return (
    <div className="PastComm-container">
        {previousComm.sort(
          (comm1, comm2) => {return comm1.attributes.preferredName > comm2.attributes.preferredName}
        ).map(
          (comm) => { 
          let bG
          if (comm.attributes.profilePicture) {
            bG = `url("${comm.attributes.profilePicture.data.attributes.url}")`;
          } else {
            bG = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${default_img_src}")`;
          }

          return (
            <div key={comm.id} className="PastComm-single">
              {/* <Link to={`/profile/${comm.attributes.username}`} onClick={scrollToTop}> */}
              <div className="PastComm-background" style={{backgroundImage: bG}}> </div>
              <div className="PastComm-about"> 
                  <div className="name"> <b>{comm.attributes.preferredName}</b> ({comm.attributes.preferredPronoun}) </div>
                  <div className="post"> {comm.attributes.wcrRole} </div>
              </div>
              {/* </Link> */}
            </div>
          )
        })}
    </div>
  );
};
  
export default PastCommittee;