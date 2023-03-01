import React from 'react';

import VideoMp4 from "../images/videos/IVANFESENKO.mp4";
import VideoWebm from "../images/videos/IVANFESENKO.webm";
import VideoOgg from "../images/videos/IVANFESENKO.ogg";
import VideoPoster from "../images/videos/IVANFESENKO_poster.jpg";

export default (
  url, 
  url_mp4,
  url_ogg,
  poster, 
  background = "white", 
  className = "video"
) => {
  return (
    <div
      className={className}
      style={{
        // position: "relative",
        background: background,
        // paddingBottom: "56.25%" /* 16:9 */,
        paddingBottom: "40.25%",
        paddingTop: 25,
        height: 0,
      }}
    >
      <video title="Embeded Video" width="750" height="500" controls poster={VideoPoster}>
        <source src={VideoWebm} type="video/webm"/>
        <source src={VideoMp4} type="video/mp4" />
        <source src={VideoOgg} type="video/ogg" />
      </video>
    </div>
  );
};
