import { useState } from "react";
import {
  PlayArrow,
  Add,
  ThumbUpOutlined,
  ThumbDownOutlined,
} from "@mui/icons-material";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  const pieceCover =
    "https://occ-0-1091-1167.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS3om16T6zfR1N1qCSNpHAatBKJuiLulRr7IsbUAWS_IWxkVtdtOlI0QZLmluo1_UWh4P6i_iK4115PC38WCI2fTdwL4aO3D0fE49LMjoSHNPd8C11srecK0BrEp.jpg?r=f9b";
  const trailer =
    // "https://player.vimeo.com/external/371433836.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
    // "https://www.youtube-nocookie.com/embed/oqxAJKy0ii4";
    "https://player.vimeo.com/video/619166305?h=f793acc01a&color=666666&title=0&byline=0&portrait=0&autoplay=1&mute=1";
  //   <iframe src="https://player.vimeo.com/video/619166305?h=f793acc01a&color=666666&title=0&byline=0&portrait=0" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
  // <p><a href="https://vimeo.com/619166305">Netflix: Squid Game, Official Trailer</a> from <a href="https://vimeo.com/therefinery">The Refinery Creative</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <img src={pieceCover} alt="" />
      ) : (
        <img src={pieceCover} alt="" style={{ opacity: 0 }} />
      )}

      {isHovered && (
        <>
          {/* <video src={trailer} autoPlay={true} loop /> */}
          <iframe
            className="video"
            src={trailer}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted;"
            allowfullscreen
            loop
          ></iframe>
          <div className="itemInfo">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpOutlined className="icon" />
              <ThumbDownOutlined className="icon" />
            </div>
            <div className="itemInfoTop">
              <span>1 hour 14 mins</span>
              <span className="ageLimit">+16</span>
              <span>2005</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex optio
              culpa impedit nihil aliquam libero excepturi dolore ducimus nulla
              temporibus. Dolorum sint pariatur quasi quod veniam, quam expedita
              perferendis soluta.
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
}
