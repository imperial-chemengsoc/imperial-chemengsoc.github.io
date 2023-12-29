import React from "react";

import SponsorBasicInfo from "./SponsorBasicInfo.js";
import "../../utilities.css";
import "./SponsorBanner.css";
import {colorArray} from './Colors.js'


/**
 * Profile Left is a component in profile displaying personal detail
 * of a user.
 *
 * Proptypes
 * @param backgroundImage for link for background image
 * @param bgColorKey choice of primary, secondary, blue, violet, black
 * @param opacityLeft for background
 * @param opacityRight for background
 * @param textColor
 * @param obj for user object
 */

const sponsorbanner = ( {backgroundImage, bgColorKey, opacityLeft, opacityRight, textColor, obj} ) => {
  const finalColorKey = bgColorKey || "black";
  const backgroundRgb = colorArray.find(element => element.key === finalColorKey).bgColor;
  const finalTextColor = textColor || colorArray.find(element => element.key === finalColorKey).textColor;
  let bgStyle = {backgroundColor: `rgb(${backgroundRgb[0]}, ${backgroundRgb[1]}, ${backgroundRgb[2]})`};

  if (backgroundImage) {
    const finalOpLeft = opacityLeft || colorArray.find(element => element.key === finalColorKey).defaultOpacity;
    const finalOpRight = opacityRight || colorArray.find(element => element.key === finalColorKey).defaultOpacity;
    bgStyle = {backgroundImage: `linear-gradient(rgba(${backgroundRgb[0]}, ${backgroundRgb[1]}, ${backgroundRgb[2]}, ${finalOpLeft}), 
      rgba(${backgroundRgb[0]}, ${backgroundRgb[1]}, ${backgroundRgb[2]}, ${finalOpRight})), 
      url(${backgroundImage})`};
  }
  
  return (
      <>
        <div className="sponsorbanner" style={bgStyle}>
          <div className="sponsorbanner-bodycontainer">
            <div className="sponsorbanner-left">
              <h3 className="sponsorbanner-title" style={{color: `var(--${finalTextColor})`}}>Profile</h3>
              <h1 className="sponsorbanner-content" style={{color: `var(--${finalTextColor})`}}> 
                <span className="sponsorbanner-line"style={{color: `var(--${finalTextColor})`}}></span>
                {obj.name}
              </h1>
            </div>
            <div className="sponsorbanner-right">
            </div>
          </div>
        </div>
        <div className="sponsorbanner-basicinfo">
          <SponsorBasicInfo obj={obj} />
        </div>
      </>
    );
  }

export default sponsorbanner;