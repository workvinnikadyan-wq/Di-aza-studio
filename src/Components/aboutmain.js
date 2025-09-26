import image1 from '../Assets/images/about.jpg';

const AboutPage = () => {
  return (
    <div
      style={{
        height: '80vh',
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-7.5rem'      
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)',
        }}
      ></div>

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <p style={{fontSize: '14vh',  fontFamily: "'Montserrat, sans-serif'",}}>ABOUT US</p>
      </div>
    </div>
  );
};

export default AboutPage;
