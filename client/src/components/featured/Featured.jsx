import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@mui/icons-material";

export default function Featured({ type }) {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option> Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img
        src="https://images.pexels.com/photos/5082582/pexels-photo-5082582.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
      <div className="info">
        <img
          src="https://images.pexels.com/photos/2335048/pexels-photo-2335048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
          vero facere in repellat, esse enim accusamus totam repudiandae
          veritatis voluptate et voluptatibus nam corrupti, maxime ipsum, itaque
          delectus reprehenderit dolores!
        </span>
        <div className="buttons">
          <button className="playbtn">
            {/* <PlayArrowOutlined /> */}
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="infobtn">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
}
