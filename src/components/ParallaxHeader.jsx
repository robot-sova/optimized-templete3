import React from "react";
import "./ParallaxHeader.css"; // Import the CSS file

export const ParallaxHeader = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image with Parallax Effect */}
      <div
        className="parallax-bg"
        style={{
          backgroundImage:
            "url('https://www.baycityappliance.com/wp-content/uploads/2023/05/kitchen-appliances-installed-in-kitchen-mountain-view-ca.png')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Centered Content */}
      <div className="content-container">
        <h1>Same Day Appliance Repair</h1>
        <p>Fast, Reliable, and Affordable Appliance Repair – Trusted by Thousands of Customers.</p>
        <a href="#contact" className="cta-button">
          Get a Free Quote
        </a>
      </div>
    </div>
  );
};

export default ParallaxHeader;
