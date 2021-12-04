import "./featured.scss";
import { PlayArrowOutlined, InfoOutlined } from "@mui/icons-material";

const Featured = () => {
  return (
    <div className="featured">
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
            <PlayArrowOutlined />
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
};

export default Featured;
