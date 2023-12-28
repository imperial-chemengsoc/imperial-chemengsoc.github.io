import React from "react";
// import { Fade } from "react-awesome-reveal";

import "../../utilities.css"
import "./Contact.css";

import TopBanner from "../modules/TopBanner.js";
import ContentBlock from "../modules/ContentBlock.js";

const Contact = () => {
  return (
    <>
    <TopBanner bgColorKey="secondary" title="Contact" content="Contact Us" />
    {/* <Fade direction="up" triggerOnce> */}
    <ContentBlock title="Emails">
      <p>We always want to hear your thoughts and ideas so feel free to get in touch!</p>
      <ul>
        <li>Society Email: <a href="mailto:guilds.chemeng@imperial.ac.uk">guilds.chemeng@imperial.ac.uk</a></li>
      </ul>
    </ContentBlock>

    <ContentBlock title="Address">
      <p>
      ChemEngSoc<br></br>
      ACEX Building<br></br>
      Imperial College London<br></br>
      South Kensington<br></br>
      London<br></br>
      SW7 2AZ
      </p>
    </ContentBlock>
    {/* </Fade> */}
    </>
  );
};

export default Contact;
  