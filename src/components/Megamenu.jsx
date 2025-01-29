import React, { useState, useEffect } from "react";
import "./MegaMenu.css"; // Import CSS

export const Megamenu = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      if (header) {
        setIsSticky(window.pageYOffset > header.offsetTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header" className={`sticky ${isSticky ? "fixed shrink" : ""}`}>
      <nav className="navbar">
        {/* Logo */}
        <a className="logo" href="#home">
          <img src="/images/same-day-appalince-repair-logo-2.webp" alt="Logo" />
        </a>

        {/* Hamburger Menu for Mobile */}
        <button className="menu-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>

        {/* Menu Items */}
        <div className={`menu-content ${menuOpen ? "open" : ""}`}>
          {/* Home Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Home</button>
            <div className="dropdown-content">
              <h3>Home Appliances We Repair</h3>
              <div className="row">
                <div className="column">
                  <a href="#"><img src="/svg/fridge.svg" alt="" /> Refrigerator</a>
                  <a href="#"><img src="/svg/freezer.svg" alt="" /> Freezer</a>
                  <a href="#"><img src="/svg/dishwasher.svg" alt="" /> Dishwasher</a>
                  <a href="#"><img src="/svg/dryer.svg" alt="" /> Dryer</a>
                  <a href="#"><img src="/svg/oven.svg" alt="" /> Oven</a>
                </div>
                <div className="column">
                  <a href="#">Microwave</a>
                  <a href="#">Cooktop</a>
                  <a href="#">Range Hood</a>
                  <a href="#">Ice Machine</a>
                  <a href="#">Slushie Machine</a>
                </div>
                <div className="column">
                  <a href="#">Walk-in Cooler</a>
                  <a href="#">Walk-in Freezer</a>
                  <a href="#">Showcase Refrigerator</a>
                </div>
              </div>
            </div>
          </div>

          {/* Commercial Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Commercial</button>
            <div className="dropdown-content">
              <h3>Commercial Appliances We Repair</h3>
              <div className="row">
                <div className="column">
                  <a href="#">Refrigerator</a>
                  <a href="#">Freezer</a>
                  <a href="#">Dishwasher</a>
                  <a href="#">Dryer</a>
                  <a href="#">Oven</a>
                </div>
                <div className="column">
                  <a href="#">Microwave</a>
                  <a href="#">Cooktop</a>
                  <a href="#">Range Hood</a>
                  <a href="#">Ice Machine</a>
                  <a href="#">Slushie Machine</a>
                </div>
                <div className="column">
                  <a href="#">Walk-in Cooler</a>
                  <a href="#">Walk-in Freezer</a>
                  <a href="#">Showcase Refrigerator</a>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <a className="phone-number" href="tel:+13238704790">
            (323) 870-4790
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Megamenu;