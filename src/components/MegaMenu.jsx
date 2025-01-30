import React, { useEffect } from "react";
import "./MegaMenu.css"; // Import your existing CSS

const MegaMenu = () => {
  useEffect(() => {
    const header = document.getElementById("header");
    const stickyOffset = header.offsetTop;

    const handleScroll = () => {
      if (window.pageYOffset > stickyOffset) {
        header.classList.add("fixed", "shrink");
      } else {
        header.classList.remove("fixed", "shrink");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="header" className="sticky">
      <div className="navbar">
        {/* First Row */}
        <div className="first-row">
          <a className="logo" href="#home">
            <img
              alt="Logo"
              src="/images/same-day-appalince-repair-logo-2.webp"
            />
          </a>

          {/* Home Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Home</button>
            <div className="dropdown-content">
              <h3 style={{ color: "#fff" }}>Home Appliances We Repair</h3>
              <div className="transparent"></div>
              <div className="row">
                <div className="column">
                  <a href="#">
                    <img src="/svg/fridge.svg" alt="" /> Refrigerator
                  </a>
                  <a href="#">
                    <img src="/svg/freezer.svg" alt="" /> Freezer
                  </a>
                  <a href="#">
                    <img src="/svg/dishwasher.svg" alt="" /> Dishwasher
                  </a>
                  <a href="#">
                    <img src="/svg/dryer.svg" alt="" /> Dryer
                  </a>
                  <a href="#">
                    <img src="/svg/oven.svg" alt="" /> Oven
                  </a>
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
              <h3 style={{ color: "#fff" }}>Commercial Appliances We Repair</h3>
              <hr />
              <div className="transparent"></div>
              <div className="row">
                <div className="column">
                  <a href="#">
                    <img src="/svg/fridge.svg" alt="" /> Refrigerator
                  </a>
                  <a href="#">
                    <img src="/svg/freezer.svg" alt="" /> Freezer
                  </a>
                  <a href="#">
                    <img src="/svg/dishwasher.svg" alt="" /> Dishwasher
                  </a>
                  <a href="#">
                    <img src="/svg/dryer.svg" alt="" /> Dryer
                  </a>
                  <a href="#">
                    <img src="/svg/oven.svg" alt="" /> Oven
                  </a>
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

          {/* Areas Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Areas</button>
            <div className="dropdown-content">
              <div className="transparent"></div>
              <div className="row">
                <div className="column">
                  <a href="#">Los Angeles</a>
                  <a href="#">Beverly Hills</a>
                  <a href="#">Pasadena</a>
                  <a href="#">Santa Monica</a>
                  <a href="#">Glendale</a>
                </div>
                <div className="column">
                  <a href="#">Orange County</a>
                  <a href="#">Long Beach</a>
                  <a href="#">West Hollywood</a>
                  <a href="#">Torrance</a>
                  <a href="#">Sherman Oaks</a>
                </div>
                <div className="column">
                  <a href="#">Burbank</a>
                  <a href="#">Encino</a>
                  <a href="#">Culver City</a>
                  <a href="#">Anaheim</a>
                </div>
              </div>
            </div>
          </div>

          {/* Brands Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Brands</button>
            <div className="dropdown-content">
              <div className="transparent"></div>
              <div className="row">
                <div className="column">
                  <a href="#">LG</a>
                  <a href="#">Samsung</a>
                  <a href="#">Whirlpool</a>
                  <a href="#">Bosch</a>
                  <a href="#">GE</a>
                </div>
                <div className="column">
                  <a href="#">Sub-Zero</a>
                  <a href="#">Wolf</a>
                  <a href="#">Thermador</a>
                  <a href="#">Viking</a>
                  <a href="#">Kenmore</a>
                </div>
                <div className="column">
                  <a href="#">Miele</a>
                  <a href="#">Dacor</a>
                  <a href="#">Fisher & Paykel</a>
                  <a href="#">Monogram</a>
                </div>
              </div>
            </div>
          </div>

          {/* Prices Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Prices</button>
            <div className="dropdown-content">
              <div className="row">
                <div className="column">
                  <a href="#">Refrigerator Repair</a>
                  <a href="#">Oven Repair</a>
                  <a href="#">Dishwasher Repair</a>
                  <a href="#">Dryer Repair</a>
                </div>
                <div className="column">
                  <a href="#">Washer Repair</a>
                  <a href="#">Microwave Repair</a>
                  <a href="#">Cooktop Repair</a>
                  <a href="#">Range Hood Repair</a>
                </div>
                <div className="column">
                  <a href="#">Get a Quote</a>
                  <a href="#">Same Day Pricing</a>
                  <a href="#">Custom Requests</a>
                </div>
              </div> 
            </div>
          </div>

          {/* Phone Number */}
          <a href="#top" className="phone-number">
            (323) 870-4790
          </a>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
