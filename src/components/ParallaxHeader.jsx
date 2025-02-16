import React from "react";
import "./ParallaxHeader.css";

const ParallaxHeader = () => {
  return (
    <header className="parallax-header">
      <div className="overlay">
        <h1 className="fade-in">Same Day Dryer Repair</h1>
        <p className="fade-in">Fast & Reliable Service</p>
      </div>
    </header>
  );
};

export default ParallaxHeader;
