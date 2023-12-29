import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Markdown from "react-markdown";
import jmespath from "jmespath";

import "../../utilities.css"
import "./Profile.css";

import TopBanner from "../modules/TopBanner.js";
import ProfileBanner from "../modules/ProfileBanner.js";
import ContentBlock from "../modules/ContentBlock.js";

import currentCommitteeData from '../../data/current_committee.json';


const Profile = () => {
  let { userName } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState();
  const [currentEngage, setCurrentEngage] = useState();

  const fetchUser = async () => {
    setIsLoading(true);
    const query = `[?username=='${userName}'] | [0]`;
    const resUser = jmespath.search(currentCommitteeData, query);
    const resEngage = await axios.get(`https://samuelchlam.herokuapp.com/api/univ-engagements?populate[user][fields][0]=username&filters[user][username][$eq]=${userName}`);

    setCurrentUser(resUser);
    setCurrentEngage(resEngage.data.data);
    setIsLoading(false);
  };

  useEffect(() => {fetchUser();}, []);

  if (isLoading) {
    <>
      <TopBanner title="" content="Loading!" />
      <div className="u-block">Thank you for your patience.</div>
    </>
  }

  if (!currentUser || !currentEngage) {
    return (
      <>
        <TopBanner title="" content="This profile does not exist." />
        <div className="u-block">Please contact us for further assistance.</div>
      </>
    )
  }
  
  return (
    <>
      <ProfileBanner title="Profile" userObj={currentUser} bgColorKey="secondary" />
      {/* <ContentBlock title="Other Engagements">
        <div className="profile-engagement-container">
          {currentEngage.sort((item1, item2) => {return (item2.attributes.startDate > item1.attributes.startDate)}).map((item, idx) => {
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
        <Markdown>{currentUser.personalIntro}</Markdown>
      </ContentBlock>
    </>
  );
};

export default Profile;