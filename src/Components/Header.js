import logo from "../Assets/images/logo.png";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import './Header.css';

export default function Header() {
  useEffect(() => { 
  const menuToggle = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (!menuToggle || !mobileMenu) return;

    const handleClick = () => {
      mobileMenu.classList.toggle("show");

      const icon = menuToggle.querySelector("i");
      if (mobileMenu.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    };

    menuToggle.addEventListener("click", handleClick);

    // cleanup event listener when component unmounts
    return () => {
      menuToggle.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="header-main">
     <div className="header-container">
        <header className="main-header">
            <div className="logo-circle">
                <img src={logo} alt="Logo"/>
            </div>
            
            <div className="nav-links d-none d-lg-flex">
                <Link to="/">Home</Link>
                <a href="#">Projects</a>
                <Link to="/about">About</Link>
            </div>
            
            <div className="nav-links d-none d-lg-flex">
                <a href="#">Process</a>
                <Link to="/contactus">Contact</Link>
                <a href="#">Review</a>
            </div>
            
            <button className="menu-toggle d-lg-none">
                <i className="fas fa-bars"></i>
            </button>
        </header>
        
        {/* <!-- Mobile menu (hidden by default) --> */}
        <div className="nav-links mobile-menu d-lg-none">
            <Link to="/">Home</Link>
            <a href="#">Services</a>
            <Link to="/about">About</Link>
            <a href="#">Process</a>
            <Link to="/contactus">Contact</Link>
            <a href="#">Review</a>
        </div>
    </div>
    </div>
  );
}
