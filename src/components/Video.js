import React from "react";
import cliffsVideo from "./media/cliffsVideo.mp4";

export default () => {
  return (
    <video
      autoPlay
      // loop
      muted
      style={{
        zIndex: "-2",
        position: "absolute",
        width: "100%",
        height: "100%",
        objectFit: "cover",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)"
    
      }}
      >
      <source src={cliffsVideo} type="video/mp4" />
    </video>
  );
};
