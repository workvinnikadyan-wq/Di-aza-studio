import React from "react";

const CenterContent = () => {
  return (
    <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
      <h1
        className="display-4 fw-bold"
        style={{ fontFamily: "'Montserrat, sans-serif'", fontSize: "14vh" }}
      >
        Di-Aza Studio
      </h1>
      <p className="lead mb-4" style={{fontSize: "4vh", opacity: "100%"}}>
        Changing Your Prespective
      </p>
      <button className="btn btn-lg text-black bg-white rounded-pill" style={{opacity: '70%', padding: '1vw 3vw' , fontSize: '1.3vw', fontWeight: 'bold'}}>
        Explore
      </button>
    </div>
  );
};

export default CenterContent;
