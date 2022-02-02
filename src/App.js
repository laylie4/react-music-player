import { useState } from "react";
import Header from "./components/Header";
import Songs from "./components/Songs";
import Video from "./components/Video";
import Play from "./components/Play";
import Rick from "./audioclips/Rick.mp3";
import Anthem from "./audioclips/Anthem.mp3";
import BabyShark from "./audioclips/BabyShark.mp3"


 const App = () => {
  const [songs] = useState([
    {
      title: "1. Never Gonna Give You Up",
      artist: "Rick Astley",
      src: Rick
    },

    {
      title: "2. A Whole New World",
      artist: "Aladdin + Princess Jasmine",
      src: "https://soundcloud.com/emily-laing-2/aladdin-a-whole-new-world-sing?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
    },

    {
      title: "3. Baby Shark",
      artist: "Pinkfong",
      src: BabyShark
    },

    {
      title: "4. Star Spangled Banner",
      artist: "Francis Scott Key",
      src: Anthem
    },
  ]);

  
  return (
    <div className="container">
      <Header />
      <Songs songs={songs} />
      <Video />
      <Play  />
    </div>
  );
};

export default App