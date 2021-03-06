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
    "https://player.vimeo.com/video/619166305?h=f793acc01a&color=666666&title=0&byline=0&portrait=0&autoplay=1&mute=1";
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
          {
            // CORB issue - can't view through <video/> as video is blocked, works with <iframe/>
            /* <video src={trailer} autoPlay={true} loop /> */
          }
          <iframe
            title="trailer"
            className="video"
            src={trailer}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted;"
            allowfullscreen
            loop
          />
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
