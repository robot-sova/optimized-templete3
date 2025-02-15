import React, { useEffect, useState } from "react";
import "./MegaMenu.css";

const MegaMenu = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="header" className={`navbar ${isSticky ? "fixed shrink" : ""}`}>
      {/* Logo */}
      <a className="logo" href="#home">
        <img alt="Logo" src="/logo.webp" width="157" height="70" />
      </a>

      {/* Dropdown Menu */}
      <div className="dropdown">
        <button className="dropbtn">Home</button>
        <div className="dropdown-content">
          <h3 style={{ color: "#fff" }}>Home Appliances We Repair</h3>
          <div className="row">
            <div className="column">
              <a href="#"><img src="/svg/fridge.svg" loading="lazy" alt="" width="14" height="14" /> Refrigerator</a>
              <a href="#"><img src="/svg/freezer.svg" loading="lazy" alt="" width="14" height="14" /> Freezer</a>
              <a href="#"><img src="/svg/dishwasher.svg" loading="lazy" alt="" width="14" height="14" /> Dishwasher</a>
              <a href="#"><img src="/svg/dryer.svg" loading="lazy" alt="" width="14" height="14" /> Dryer</a>
              <a href="#"><img src="/svg/oven.svg" loading="lazy" alt="" width="14" height="14" /> Oven</a>
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

      {/* More Dropdowns */}
      <div className="dropdown">
        <button className="dropbtn">Commercial</button>
        <div className="dropdown-content">
          <h3 style={{ color: "#fff" }}>Commercial Appliances We Repair</h3>
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

      {/* Phone Number */}
      <a href="#top" className="phone-number">(323) 870-4790</a>
    </div>
  );
};

export default MegaMenu;
