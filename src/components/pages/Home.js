import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Home.css";

import TopBanner from "../modules/TopBanner.js";
import TopBannerImage from "../../img/topbanner/committee.jpeg";
import EventShortDes from "../modules/EventShortDes.js";
import Image from "../modules/Image.js";
import ContentBlock from "../modules/ContentBlock.js";

// const axios = require("axios");

const Home = () => {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const BaseURL = "https://samuelchlam.herokuapp.com/api"
    const response = await axios.get(`${BaseURL}/events?sort=startDate&pagination[pageSize]=50&populate=banner&populate=mainContact&populate=natures`);
    setEvents(response.data.data);
  };

  useEffect(() => {getEvents();}, []);

  return (
    <>
      <TopBanner 
        backgroundImage={TopBannerImage} 
        bgColorKey="black" 
        title="Home" 
        content="Welcome to the Society" />
      <ContentBlock title="About ChemEngSoc">
        <p>The Chemical Engineering Society was established by postgraduates in 1935, 
          but soon became dormant following the outbreak of the Second World War. 
          With the introduction of an undergraduate course in 1937, ChemEngSoc truly 
          took off after the war and has continued to flourish ever since. 
          <br></br>
          <br></br>
          Every ChemEng student (Undergraduate, MSc and PhD) automatically gains free 
          society membership, meaning the society boasts over 1000 members of over 30 
          different nationalities. The ultimate goal of the society is to ensure that 
          each and every student within the department gets the most out of their time 
          at Imperial College London, through both exposure to industry and regular 
          social events.
        </p>
      </ContentBlock>
      <div className="u-block">
        <h1 className="u-section-title">Upcoming Events</h1>
        <div className="u-gridPic-3">
          {events.filter(
            (item) => new Date(item.attributes.startDate) > new Date()
            ).slice(0,3).map(
              (item) => {
                return (
                  <Image 
                    key={item.id}
                    title="" 
                    src={item.attributes.banner.data ? item.attributes.banner.data.attributes.url : ""}
                    opacity={item.attributes.banner.data ? 1 : .5}
                    isBlack={Boolean(true)}
                    aspect="16/9"
                    suppressArrow={Boolean(true)}
                    des={<EventShortDes attributes={item.attributes}/>}
                    linkdes={`/events/${item.id}`}
                    isLocal={Boolean(true)}
                    altText={item.attributes.banner.data ? item.attributes.banner.data.attributes.alternativeText : ""}/>
                )}
            )}
        </div>
      </div>
    </>
  );
}

export default Home;
