import React, { useEffect, useState } from "react";
import "./ParallaxHeader.css";

const ParallaxHeader = () => {
  const [heading, setHeading] = useState("Same Day Appliance Repair");

  useEffect(() => {
    const handleInput = (e) => {
      setHeading(e.target.innerText);
    };

    const preventEnterKey = (e) => {
      if (e.key === "Enter" || e.keyCode === 13) {
        e.preventDefault();
        return false;
      }
    };

    window.addEventListener("keydown", preventEnterKey);

    return () => {
      window.removeEventListener("keydown", preventEnterKey);
    };
  }, []);

  return (
    <div className="parallax-container">
      <div className="gold-text-container">
        <h1
          className="gold-title"
          contentEditable
          data-heading={heading}
          onInput={(e) => setHeading(e.target.innerText)}
        >
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default ParallaxHeader;
