import { useState } from "react";
import { pictures } from "./images";
import { Button } from "reactstrap";

export default function Carousel() {
  const [item, setItem] = useState(0);

  const clickPrev = () => {
    item && setItem(item - 1);
  };
  const clickNext = () => {
    if (item + 1 < pictures.length) {
      setItem(item + 1);
    }
  };
  return (
    <div>
      {pictures.slice(item, item + 1).map((img) => {
        return (
          <div key={img.id}>
            <img src={img.image} alt="name" />
          </div>
        );
      })}
      <div className="btn-container">
        <Button
          color="primary"
          className={item === 0 && "hidden"}
          onClick={clickPrev}
        >
          Prev
        </Button>
        <Button
          color="primary"
          className={item + 1 > Math.ceil(pictures.length - 1) && "hidden"}
          onClick={clickNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
