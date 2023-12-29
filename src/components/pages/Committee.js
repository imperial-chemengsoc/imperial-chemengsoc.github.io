import React from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Committee.css";

import TopBanner from "../modules/TopBanner.js";
import ContentBlock from "../modules/ContentBlock.js";
import CurrentCommittee from "../modules/CurrentComm.js";
import PastCommittee from "../modules/PastComm.js";
import ButtonFlex from "../modules/ButtonFlex.js";
import constitutionPDF from "../../data/chemengsoc_constitution.pdf";

import TopBannerImage from "../../img/topbanner/committee.jpeg";

const Governance = () => {

  return (<>
    <TopBanner backgroundImage={TopBannerImage} title="" content="Committee" />

    {/* <Fade cascade={true} direction="up" triggerOnce> */}
    <ContentBlock title="Who we are">
      <p>ENTER COMMITTEE DESCRIPTION</p>
      <ButtonFlex display={[
          {key: 1, isLocal: false, des: "Click here to view the constitution", link: constitutionPDF}
        ]}/>
    </ContentBlock>
    <ContentBlock title="Current Committee Members (2023-2024)">
      <CurrentCommittee />
    </ContentBlock>
    {/* <ContentBlock title="Past Committee Members"> */}
        {/* <PastCommittee /> */}
    {/* </ContentBlock> */}
    {/* </Fade> */}
    </>
  );
}

export default Governance;