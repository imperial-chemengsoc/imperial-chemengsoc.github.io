import React, {useState, useEffect} from "react";
// import { Fade } from "react-awesome-reveal";

import axios from "axios";
import jmespath from 'jmespath';
import ContentBlock from "../../modules/ContentBlock.js";
import TopBannerImage from "../../../img/topbanner/frankmorton.jpg";
import Image from "../../modules/Image.js";
import TopBanner from "../../modules/TopBanner.js";
import EventShortDes from "../../modules/EventShortDes.js";
import EventsData from "../../../data/events.json";

import "../../../utilities.css"
import "./WhatsOn.css";
import "../NotFound.css";

const WhatsOn = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Use jmespath to filter events with a start date greater than the current date
    const today = new Date().toISOString();
    const query = `events[?attributes.startDate > \`${today}\`] | sort_by(@, &attributes.startDate)`;
    const filteredEvents = jmespath.search({ events: EventsData }, query);
    setEvents(filteredEvents);
  }, []);

  return (
    <>
      <TopBanner
        backgroundImage={TopBannerImage} 
        bgColorKey="black" 
        title="What's On"
        content="List of Events" />
      <ContentBlock title="Events">
        <p>Please search below upcoming events happening in  the college.</p>
        <div className="u-gridPic-3">
          {events.map((item) => {
            return (
              <Image 
                key={item.id}
                title="" 
                src={item.attributes.banner.data ? item.attributes.banner.data.attributes.url : ""}
                opacity={item.attributes.banner.data ? 1 : .5}
                isBlack={true}
                aspect="16/9"
                suppressArrow={true}
                des={<EventShortDes attributes={item.attributes}/>}
                linkdes={`/events/${item.id}`}
                isLocal={true}
                altText={item.attributes.banner.data ? item.attributes.banner.data.attributes.alternativeText : ""}/>
            )}
          )}
        </div>
      </ContentBlock>
    </>
  );
};
  
export default WhatsOn;