import { useState, useRef } from "react";
import { ListItem } from "../index";
import {
  ArrowForwardIosOutlined,
  ArrowBackIosOutlined,
} from "@mui/icons-material";
import "./list.scss";

export default function List() {
  const [slideNum, setSlideNum] = useState(0);
  const [viewLeftArrow, setViewLeftArrow] = useState(false);
  const [viewRightArrow, setViewRightArrow] = useState(true);
  const maxItemsInList = 5;

  const listRef = useRef();

  const handleClick = (direction) => {
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNum > 0) {
      setSlideNum(slideNum - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    } else if (direction === "right" && slideNum < maxItemsInList) {
      setSlideNum(slideNum + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }
    slideNum > 0 ? setViewLeftArrow(true) : setViewLeftArrow(false);
    slideNum < maxItemsInList - 1
      ? setViewRightArrow(true)
      : setViewRightArrow(false);
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="arrow left"
          onClick={() => handleClick("left")}
          style={{ display: !viewLeftArrow && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className="arrow right"
          onClick={() => handleClick("right")}
          style={{ display: !viewRightArrow && "none" }}
        />
      </div>
    </div>
  );
}
