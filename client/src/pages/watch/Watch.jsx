import { ArrowBackOutlined } from "@mui/icons-material";
import "./watch.scss";

export default function Watch() {
  const trailer =
    "https://player.vimeo.com/video/619166305?h=f793acc01a&color=666666&title=0&byline=0&portrait=0&autoplay=1";

  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      {/* <video className="video" autoPlay progress controls src={trailer} /> */}
      <iframe
        title="trailer"
        className="video"
        src={trailer}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted; fullscreen; progress;"
        allowfullscreen
        loop
      />
    </div>
  );
}
