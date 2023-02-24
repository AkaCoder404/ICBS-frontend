import Xgplayer from "xgplayer-react";
// import Mp4Player from "xgplayer-mp4";

import Video from "../images/videos/icbs.mp4";
import VideoPoster from "../images/videos/icbs_poster.jpg";

export default (url, background = "white", className = "video") => {
  let config = {
    id: "mse",
    url: Video,
    poster: VideoPoster,
  };

  let Player = null;

  return (
    <div
      className={className}
      style={{
        // position: "relative",
        background: background,
        paddingBottom: "56.25%" /* 16:9 */,
        paddingTop: 25,
        height: 0,
      }}
    >
     <Xgplayer style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
     }}
     config={config} 
     playerInit={(player)=>{ Player = player; }} />
    </div>
  );
};
