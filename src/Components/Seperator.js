import React from "react";
import CircleDrop from "../Assets/images/left.png"
import CircleDrop2 from "../Assets/images/right.png"
import Diamond from "../Assets/images/Vector.png"

export default function Separator() {
  return (
    <div className="separator" style={{backgroundColor:'#EDEDEC'}}>
           <img src={CircleDrop} alt="circle-drop-left" className="icon" style={{width: '4vw', height: 'auto'}} />

      <span className="line"></span>
             <img src={Diamond} alt="diamond" className="icon" style={{width: '2vw', height: 'auto'}} />

        <span className="line"></span>
            <img src={CircleDrop2} alt="circle-drop-right" className="icon" style={{width: '4vw', height: 'auto'}} />

    </div>
  );
}
