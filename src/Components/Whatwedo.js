import React from 'react';
import image1 from '../Assets/images/whatwedo.jpg';

const ImageTextSection = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row align-items-center justify-content-center"
      style={{ minHeight: '60vh', width: '90%', margin: 'auto' }}
    >
      {/* Left Image */}
      <div className="image-container d-flex justify-content-center align-items-center mb-4">
        <img
          src={image1}
          alt="Section"
          className="image"
        />
      </div>

      {/* Right Text */}
      <div className="align-items-center align-items-lg-start p-lg-0 p-2" style={{ flex: 1 }}>
        <h2
          className="mb-3 fs-4 fs-lg-1 myheadingabout"
          style={{
            margin: 0,
            fontFamily: "'Montserrat, sans-serif'",
            fontWeight: 400,
            color: '#333',
            marginLeft: '3vw',
          }}
        >
          What we do?
        </h2>
        <p className="whatwedopara">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's <strong>standard dummy</strong> text
          ever since the 1500s...
        </p>
        <p className="whatwedopara">
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
        <p className="whatwedopara">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's <strong>standard dummy</strong> text
          ever since the 1500s...
        </p>
        <p className="whatwedopara">
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default ImageTextSection;
