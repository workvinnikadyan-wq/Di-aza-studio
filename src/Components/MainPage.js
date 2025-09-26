import React from 'react';
import image1 from '../Assets/images/mainpage.jpg';
import CenterContent from "./centerContent";


const MainPage = () => {
  return (
    <div className="main-page position-relative overflow-hidden w-100 vh-100">
      {/* Dark overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-30"></div>

      <div className="d-flex align-items-center justify-content-center h-100 position-relative">
        <div className="container-fluid h-100 p-0">
          <div 
            id="carouselExampleIndicators"
            className="carousel slide h-100"
            data-ride="carousel"
            data-interval="5000"
          >
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active rounded-circle bg-white" style={{ width: "12px", height: "12px" }}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1" className="rounded-circle bg-light" style={{ width: "12px", height: "12px" }}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2" className="rounded-circle bg-light" style={{ width: "12px", height: "12px" }}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3" className="rounded-circle bg-light" style={{ width: "12px", height: "12px" }}></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4" className="rounded-circle bg-light" style={{ width: "12px", height: "12px" }}></li>
            </ol>

            <div className="carousel-inner h-100">
              <div 
                className="carousel-item active h-100"
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(70%)'
                }}
              >
              </div>

              <div 
                className="carousel-item h-100"
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(70%)'
                }}
              >
              </div>

              <div 
                className="carousel-item h-100"
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(70%)'
                }}
              >
              </div>
              <div 
                className="carousel-item h-100"
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(70%)'
                }}
              >
              </div>
              <div 
                className="carousel-item h-100"
                style={{
                  backgroundImage: `url(${image1})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  filter: 'brightness(70%)'
                }}
              >
              </div>
            </div>
          </div>
        </div>
            <CenterContent />
      </div>  

    </div>
  );
};

export default MainPage;
