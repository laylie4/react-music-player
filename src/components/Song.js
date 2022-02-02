
import { Play } from './Play'

const Song = ({ song }) => {
  return (
    <div className="Song">
      <h3>
        <Play /> {song.title}
      </h3>
      <p>{song.artist}</p>
    </div>
  );
};

export default Song;
