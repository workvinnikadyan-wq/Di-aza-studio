import image1 from '../Assets/images/mainpage.jpg';

const AboutPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        position: 'relative',
        backgroundImage: `url(${image1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-8rem',
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
        <div className='d-flex flex-column align-items-center'>
        <h1
        className="display-4 fw-bold"
        style={{ fontFamily: "'Montserrat, sans-serif'", fontSize: "14vh" }}
      >
        Di-Aza Studio
      </h1>
      <p className="lead mb-4" style={{fontSize: "4vh", opacity: "100%"}}>
        Changing Your Prespective
      </p>
      <button className="btn btn-lg text-black bg-white rounded-pill" style={{opacity: '70%', padding: '16px 24px' , fontSize: '24px', fontWeight: 'bold', width: '250px'}}>
        Explore
      </button>
      </div>
      </div>
    </div>
  );
};

export default AboutPage;
