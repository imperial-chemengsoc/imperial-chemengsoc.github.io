import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import jmespath from 'jmespath';
import Markdown from "react-markdown";
import { Link } from "react-router-dom";
// import { Fade } from "react-awesome-reveal";

import EventBanner from "../../modules/EventBanner.js";
import ContentBlock from "../../modules/ContentBlock.js";
import EventsData from "../../../data/events.json";

import "../../../utilities.css"
import "./Event.css";


const Event = () => {
  let { eventId } = useParams();

  const [event, setEvent] = useState({});

  const getEvent = async () => {
    const query = `[?id == \`${eventId}\`].attributes | [0]`;
    const resEvent = jmespath.search(EventsData, query);
    setEvent(resEvent);
  };

  useEffect(() => {getEvent();}, []);

  return (
    <>
      <EventBanner eventObj={event} />
      <ContentBlock title="Description">
        <Markdown>{event.description}</Markdown>
      </ContentBlock>
      <ContentBlock title="Contacts">
        <Markdown>{event.contacts}</Markdown>
      </ContentBlock>
    </>
  );
};
  
export default Event;
