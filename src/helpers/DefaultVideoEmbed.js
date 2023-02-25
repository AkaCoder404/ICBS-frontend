import React from 'react';

import Video from "../images/videos/icbs.mp4";
import VideoWebm from "../images/videos/icbs.webm";
import VideoOgg from "../images/videos/icbs.ogg";
import VideoPoster from "../images/videos/icbs_poster.jpg";

export default (url, background = "white", className = "video") => {
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
        <source src={Video} type="video/mp4" />
        <source src={VideoOgg} type="video/ogg" />

      </video>
    </div>
  );
};
