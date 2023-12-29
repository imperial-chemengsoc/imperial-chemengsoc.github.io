import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";
import jmespath from "jmespath";

import "../../utilities.css"
import "./Sponsor.css";

import TopBanner from "../modules/TopBanner.js";
import SponsorBanner from "../modules/SponsorBanner.js";
import ContentBlock from "../modules/ContentBlock.js";
import currentSponsorData from '../../data/sponsors.json';


const Sponsor = () => {
  let { userName } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [currentSponsor, setCurrentcurrentSponsor] = useState();

  const fetchUser = async () => {
    setIsLoading(true);
    const query = `[?username=='${userName}'] | [0]`;
    const resUser = jmespath.search(currentSponsorData, query);

    setCurrentcurrentSponsor(resUser);
    setIsLoading(false);
  };

  useEffect(() => {fetchUser();}, []);

  if (isLoading) {
    <>
      <TopBanner title="" content="Loading!" />
      <div className="u-block">Thank you for your patience.</div>
    </>
  }

  if (!currentSponsor) {
    return (
      <>
        <TopBanner title="" content="This profile does not exist." />
        <div className="u-block">Please contact us for further assistance.</div>
      </>
    )
  }
  
  return (
    <>
      <SponsorBanner title="Sponsor" obj={currentSponsor} bgColorKey="secondary" />
      {/* <ContentBlock title="Other Engagements">
        <div className="profile-engagement-container">
          {currentEnga  ge.sort((item1, item2) => {return (item2.attributes.startDate > item1.attributes.startDate)}).map((item, idx) => {
            const startYear = new Date(item.attributes.startDate);
            const endYear = item.attributes.endDate ? new Date(item.attributes.endDate) : "";

            return (
              <div key={idx} className="profile-engagement"> 
                {item.attributes.name}, {item.attributes.organisation} {startYear.getFullYear()}-
                {endYear ? (<>{endYear.getFullYear()}</>) : (<></>)}</div>
                );
              }
            )
          }
        </div>
      </ContentBlock> */}

      <ContentBlock title="Personal introduction">
        <Markdown>{currentSponsor.personalIntro}</Markdown>
      </ContentBlock>
    </>
  );
};

export default Sponsor;