import logo from "../Assets/images/logo.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaArrowRight } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div
        className="container-fluid d-flex flex-column flex-lg-row justify-content-between"
        style={{ backgroundColor: "#000", padding: "6rem 1rem" }}
      >
        {/* diva */}
<div
  className="card text-center flex-fill mx-0 col-12 col-lg-4 mb-4 p-2"
  style={{ backgroundColor: "#000" }}
>
  <div className="d-flex justify-content-center mt-3">
    <img
      src={logo}
      className="rounded-circle bg-white"
      style={{ width: "6.25rem", height: "6.25rem", objectFit: "cover" }}
      alt="Profile"
    />
  </div>
  <div className="card-body">
    <p
      className="card-text text-lg-left text-center text-white text-wrap"
      style={{ fontSize: "1rem", lineHeight: "1.6rem", maxWidth: "90%", margin: "0 auto" }}
    >
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.
    </p>
  </div>
</div>


        {/* divb */}
        <div className="flex-fill mx-2 mb-5" style={{ backgroundColor: "#000" }}>
          <div className="row">
            {/* Column 1 */}
            <div className="col-5 pe-3 ml-2" style={{ borderRight: "1px solid white" }}>
              <div className="mb-4">
                <a
                  href="#"
                  className="text-white text-decoration-none mb-4"
                  style={{ fontSize: "1.4rem", fontWeight: "700" }} // 24px
                >
                  Support
                </a>
              </div>
              <div className="mb-2 align-items-center">
                <a href="#" className="text-white text-decoration-none fs-4 fs-lg-2" style={{ fontSize: "1.1rem" }}>Help</a>
              </div>
              <div className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "1.1rem" }}>FAQ</a>
              </div>
              <div className="mb-2">
                <Link to="/contactus" className="text-white text-decoration-none" style={{ fontSize: "1.1rem" }}>Contact</Link>
              </div>
            </div>

            <div className="col-4 ps-3 ml-5">
              <div className="mb-4">
                <a
                  href="#"
                  className="text-white text-decoration-none mb-4"
                  style={{ fontSize: "1.4rem", fontWeight: "700" }} // 24px
                >
                  Company
                </a>
              </div>
              <div className="mb-2">
                <Link to="/about" className="text-white text-decoration-none" style={{ fontSize: "1.1rem" }}>About</Link>
              </div>
              <div className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "1.1rem" }}>Careers</a>
              </div>
              <div className="mb-2">
                <a href="#" className="text-white text-decoration-none" style={{ fontSize: "1.1rem" }}>Press Kit</a>
              </div>
            </div>
          </div>
        </div>

        {/* divc */}
        <div className="flex-fill mx-2 text-white">
  <div className="d-flex flex-column align-items-center align-items-md-start gap-3">

    {/* Social Icons */}
    <div className="d-flex gap-3 justify-content-center justify-content-md-start mb-4">
      <a href="#" className="text-white mx-2" style={{ fontSize: "1.5rem" }}><FaFacebookF /></a>
      <a href="#" className="text-white mx-2" style={{ fontSize: "1.5rem" }}><FaInstagram /></a>
      <a href="#" className="text-white mx-2" style={{ fontSize: "1.5rem" }}><FaLinkedinIn /></a>
      <a href="#" className="text-white mx-2" style={{ fontSize: "1.5rem" }}><FaTwitter /></a>
    </div>

    {/* Newsletter */}
<div className="footer-newsletter d-flex flex-column gap-2 align-items-center align-items-md-start 
                text-center text-md-start w-100">
  <div className="fw-bold m-2 align-items-center align-items-md-start" style={{ fontSize: "1.25rem" }}>Subscribe to Newsletter</div>
  <div className="text-white-50 m-2 align-items-center align-items-md-start mb-4" style={{ fontSize: "1rem" }}>Curious about developments</div>

  <div style={{ position: "relative", width: "100%" }}>
    <input
      type="email"
      placeholder="subscribe@me.now"
      className="form-control rounded-pill bg-dark text-white"
      style={{ padding: "0.5rem 1.5rem", width: "100%", border: "1px solid #fff" }}
    />
    <button
      type="button"
      className="btn btn-primary rounded-circle d-flex align-items-center justify-content-center"
      style={{
        position: "absolute",
        top: "33%",
        right: "1px",
        transform: "translateY(-50%)",
        height: "2.5rem",
        width: "2.5rem",
        padding: 0,
        backgroundColor: "black",
        border: "none",
        cursor: "pointer",
      }}
    >
      <FaArrowRight style={{ color: "#fff" }} />
    </button>
  </div>
</div>




  </div>
</div>

      </div>

        <hr className="thin-line" style={{margin:"0px", backgroundColor:"white"}}/>

      <div className="container-fluid text-center text-white" style={{ backgroundColor: "#000", padding: "1rem", fontSize: "1rem" }}>
        © 2025 Your Company. All rights reserved.
      </div>
    </>
  );
}
