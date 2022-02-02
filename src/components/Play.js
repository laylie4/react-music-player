import { useState } from "react";
import { Howler } from "howler";
import { Howl } from "howler";
import React, { Component } from "react";
import Rick from "./audioclips/Rick.mp3";
import Anthem from "./audioclips/Anthem.mp3";
import { BsPlayCircle } from "react-icons/bs";
import App from "../App";
import Songs from "./Songs";

export class Play extends Component { 
  soundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  RenderButtonSound = () => 
     { 
      return (
        <button
          style={{
            background: "none",
            color: "inherit",
            border: "none",
            padding: "0",
            font: "inherit",
            cursor: "pointer",
            outline: "inherit",
          }}
          
          onClick={() => this.soundPlay(App.src)}
        >
          <BsPlayCircle />
        </button>
      );
    
    }

  render() {
    Howler.volume(1.0);
    return <div>{this.RenderButtonSound()}</div>;
  }
}


export default Play