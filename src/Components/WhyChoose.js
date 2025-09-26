import React from 'react';
import image1 from '../Assets/images/whychoose.jpg';

const ImageTextSectionReverse = () => {
  return (
    <div
      className="d-flex flex-column flex-lg-row align-items-center justify-content-center"
      style={{ minHeight: '60vh', width: '90%', margin: 'auto' }}
    >
      {/* Image first on mobile, second on desktop */}
      <div
        className="order-1 order-lg-2 image-container d-flex justify-content-center mb-4 mb-lg-0"
      >
        <img
          src={image1}
          alt="Section"
          className="image"
        />
      </div>

      {/* Text first on desktop, second on mobile */}
      <div className="order-2 order-lg-1 flex-fill d-flex flex-column align-items-start text-left ms-0 ms-lg-5 p-lg-0 p-2">
        <h2
          className="mb-3 ml-lg-4 fs-4 myheadingabout"
          style={{
            margin: 0,
            fontFamily: "'Montserrat, sans-serif'",
            fontWeight: 400,
            color: '#333',
          }}
        >
          Why Choose Us?
        </h2>
        <p className="WhyChoosepara">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's <strong>standard dummy</strong> text
          ever since the 1500s...
        </p>
        <p className="WhyChoosepara">
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
        <p className="WhyChoosepara">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's <strong>standard dummy</strong> text
          ever since the 1500s...
        </p>
        <p className="WhyChoosepara">
          It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default ImageTextSectionReverse;
