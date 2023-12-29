import React from "react";

import "../../utilities.css"
import "./Sponsors.css";

import TopBanner from "../modules/TopBanner.js";
import ContentBlock from "../modules/ContentBlock.js";
import Sponsorships from "../modules/Sponsorships.js";


import TopBannerImage from "../../img/topbanner/frankmortonsponsor.jpg";

const Sponsors = () => {
  return (
    <>
      <TopBanner backgroundImage={TopBannerImage} title="" content="Sponsors" />
      <ContentBlock title="Current Sponsors (2023-2024)">
      <Sponsorships />
      </ContentBlock>
    </>
  );
}

export default Sponsors;
