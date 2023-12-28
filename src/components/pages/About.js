import React from "react";

import "../../utilities.css"
import "./About.css";

import TopBanner from "../modules/TopBanner.js";
import ContentBlock from "../modules/ContentBlock.js";
import ButtonFlex from "../modules/ButtonFlex.js";

import TopBannerImage from "../../img/topbanner/committee.jpeg";

const About = () => {
  return (
    <>
      <TopBanner backgroundImage={TopBannerImage} title="About" content="About" />

    </>
  );
}

export default About;
