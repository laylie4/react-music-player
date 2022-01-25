import { Howler } from "howler";
import { Howl } from "howler";
import React, { Component } from "react";
import Rick from "./audioclips/Rick.mp3";
import { BsPlayCircle } from "react-icons/bs";

const audioClips = [{ sound: Rick }];

class Play extends Component {
  soundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  RenderButtonSound = () => {
    return audioClips.map((soundObj, index) => {
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
          key={index}
          onClick={() => this.soundPlay(soundObj.sound)}
        >
          <BsPlayCircle />
        </button>
      );
    })
  }

  render() {
    Howler.volume(1.0);
    return <div>
      {this.RenderButtonSound()}
    </div>
  }
}

export default Play;

