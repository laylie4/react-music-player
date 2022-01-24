import { IoPlayCircleOutline } from "react-icons/io5";

const Song = ({ song }) => {
  return (
    <div className="Song">
      <h3>
        <IoPlayCircleOutline style={{ color: "#273E82" }} /> {song.title}
      </h3>
      <p>{song.artist}</p>
    </div>
  );
};

export default Song;
