import React from "react";
import { FaEnvelope } from "react-icons/fa";
import './contactform.css';

export default function ProjectForm() {
  return (
    <>
      <div style={{margin:"3vw"}}>
        {/* Desktop / Large Screen View */}
        <div className="contact-container d-none d-lg-block" style={{width:"100%"}}>
          <div className="row g-0">
            {/* Left Section */}
            <div className="col-lg-6">
              <div className="left-section">
                <h1 className="project-heading">Tell us About Your Project</h1>
                <p className="project-description">
                  I'm excited to hear about your ideas and collaborate on bringing them to life. 
                  Whether it's a website, app, or any digital project, share your vision with me.
                </p>
                <div className="border border-dark " style={{margin: "5 5 5 0", padding:"2%", width:"70%", borderRadius:"15px"}}>
                <div className="idea-box">You have different questions?</div>
                <p style={{fontSize:".8rem", marginBottom:"2rem"}}>Our team will answer all your questions. We ensure a quick response & support for all your specific needs.</p>
                <button className="email-button">
                  <span className="email-icon">
                    <FaEnvelope />
                  </span>
                  diazastudio@gmail.com
                </button>
                </div>
              </div>
            </div>

            {/* Right Section (Form) */}
            <div className="col-lg-6">
              <div className="form-section">
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" placeholder="Enter Your First Name" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" placeholder="Enter Your Last Name" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" placeholder="Enter Your Email Address" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Subject</label>
                      <input type="text" className="form-control" placeholder="Enter Subject" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <label className="form-label">Queries</label>
                      <textarea className="form-control" placeholder="Your Message"></textarea>
                    </div>
                  </div>

                  <button type="submit" className="submit-btn h4">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-container d-lg-none">
          <div className="left-section">
            <h1 className="project-heading">Tell us About Your Project</h1>
            <p className="project-description">
              I'm excited to hear about your ideas and collaborate on bringing them to life. 
              Whether it's a website, app, or any digital project, share your vision with me.
            </p>
          </div>

          <div className="form-section" style={{padding:"10px"}}>
            <form>
              <div className="mb-3">
                <label className="form-label">First Name</label>
                <input type="text" className="form-control " placeholder="Enter Your First Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Last Name</label>
                <input type="text" className="form-control " placeholder="Enter Your Last Name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input type="email" className="form-control " placeholder="Enter Your Email Address" />
              </div>
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input type="text" className="form-control " placeholder="Enter Subject" />
              </div>
              <div className="mb-3">
                <label className="form-label">Queries</label>
                <textarea className="form-control " placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
