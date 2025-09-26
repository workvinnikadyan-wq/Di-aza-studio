import React from "react";
import img1 from "../Assets/scrollerimages/1.jpg"
import img2 from "../Assets/scrollerimages/2.jpg"
import img3 from "../Assets/scrollerimages/3.jpg"
import img5 from "../Assets/scrollerimages/5.jpg"
import img6 from "../Assets/scrollerimages/6.jpg"
import img7 from "../Assets/scrollerimages/7.jpg"
import img8 from "../Assets/scrollerimages/8.jpg"
import img9 from "../Assets/scrollerimages/9.jpg"
import img11 from "../Assets/scrollerimages/11.jpg"
import img12 from "../Assets/scrollerimages/12.jpg"
import img13 from "../Assets/scrollerimages/13.jpg"
import img15 from "../Assets/scrollerimages/15.jpg"
import img16 from "../Assets/scrollerimages/16.jpg"
import img17 from "../Assets/scrollerimages/17.jpg"
import img18 from "../Assets/scrollerimages/18.jpg"

const defaultImagesLeft = [img1, img2, img3, img5, img6, img7, img8];
const defaultImagesRight =[img9, img11, img13, img15, img16, img17, img18,img12];

export default function ImageSlider({ 
      imagesLeft = defaultImagesLeft,
  imagesRight = defaultImagesRight,
  speed = 30,
}) {
  return (
    <div className="slider-wrapper">
      <div className="slider slider-left">
        <div className="slider-track" style={{ animationDuration: `${speed}s` }}>
          {imagesLeft.concat(imagesLeft).map((img, i) => (
            <div className="slide" key={`left-${i}`}>
              <img src={img} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="slider slider-right">
        <div className="slider-track" style={{ animationDuration: `${speed}s` }}>
          {imagesRight.concat(imagesRight).map((img, i) => (
            <div className="slide" key={`right-${i}`}>
              <img src={img} alt={`slide-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
