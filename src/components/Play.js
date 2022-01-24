import { Howler } from "howler";
import { Howl } from "howler";
import React, { Component } from "react";
import Rick from "./audioclips/Rick.mp3"

const audioClips = [{ sound: Rick, label: "Play" }];

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
        <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
          {soundObj.label}
        </button>
      )
    })
  }

  render() {
    Howler.volume(1.0);
    return <div className = "Play">
      {this.RenderButtonSound()}
    </div>
  }
}

export default Play;

