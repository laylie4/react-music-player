import { useState } from "react";
import Header from "./components/Header";
import Songs from "./components/Songs";
import Video from "./components/Video";
import Play from "./components/Play";

const App = () => {
  const [songs, setSongs] = useState([
    {
      title: "1. Never Gonna Give You Up",
      artist: "Rick Astley",
    },

    {
      title: "2. You Got A Friend In Me",
      artist: "Randy Newman",
    },

    {
      title: "3. Baby Shark",
      artist: "Pinkfong",
    },
    {
      title: "4. Star Spangled Banner",
      artist: "Francis Scott Key",
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Songs songs={songs} />
      <Video />
      <Play />
    </div>
  );
};
export default App;
