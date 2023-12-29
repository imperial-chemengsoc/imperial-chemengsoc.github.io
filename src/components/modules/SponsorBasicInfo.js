import React from "react";

import "../../utilities.css";
import "./SponsorBasicInfo.css";

/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param obj for object
 */

import default_img_src from "../../img/logo/chemengsoc_logo.png";

const SponsorBasicInfo = ( {obj} ) => {

  return (
        <div>
            <div style={
              {backgroundImage: `url(${obj.profilePicture.url})`,backgroundColor: 'white'}}
              className="u-image-contain u-aspect-43" 
              title={obj.profilePicture.alternativeText}> </div>
            <div className="sponsorbasicinfo-basic">
                <p>Industry <br/> <b>{obj.industry}</b></p>
                <p>
                  <a href={`mailto:${obj.preferredEmail}`}><i className="fa-solid fa-envelope fa-3x"></i></a>
                  {obj.websiteLink && (<a href={obj.websiteLink}><i className="fa-solid fa-globe fa-3x"></i></a>)}
                  {obj.facebookLink && (<a href={obj.facebookLink}><i className="fa-brands fa-facebook fa-3x"></i></a>)}
                  {obj.twitterLink && (<a href={obj.twitterLink}><i className="fa-brands fa-twitter fa-3x"></i></a>)}
                  {obj.linkedInLink && (<a href={obj.linkedInLink}><i className="fa-brands fa-linkedin fa-3x"></i></a>)}
                </p>
            </div>
        </div>
    );
  }

export default SponsorBasicInfo;