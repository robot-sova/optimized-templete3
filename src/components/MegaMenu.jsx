import React, { useState, useEffect } from "react";
import "./MegaMenu.css";

const MegaMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle mouse enter - Lazy Load dropdown only when hovered
  const handleMouseEnter = (menu) => {
    setActiveDropdown(menu);
  };

  // Handle mouse leave - Hide dropdown after a small delay
  const handleMouseLeave = () => {
    setTimeout(() => setActiveDropdown(null), 200);
  };

  return (
    <div id="header" className="sticky">
      <div className="navbar">
        {/* Logo */}
        <a className="logo" href="#home">
          <img alt="Logo" src="/logo.webp" width="157" height="70" />
        </a>

        {/* Home Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("home")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="dropbtn">Home</button>
          {activeDropdown === "home" && (
            <div className="dropdown-content">
              <h3 className="dropdown-title">Home Appliances We Repair</h3>
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
          )}
        </div>

        {/* Commercial Dropdown */}
        <div
          className="dropdown"
          onMouseEnter={() => handleMouseEnter("commercial")}
          onMouseLeave={handleMouseLeave}
        >
          <button className="dropbtn">Commercial</button>
          {activeDropdown === "commercial" && (
            <div className="dropdown-content">
              <h3 className="dropdown-title">Commercial Appliances We Repair</h3>
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
          )}
        </div>

        {/* Phone Number */}
        <a href="#top" className="phone-number">(323) 870-4790</a>
      </div>
    </div>
  );
};

export default MegaMenu;
