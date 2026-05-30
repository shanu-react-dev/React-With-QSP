import React from "react";
import fistpage from "../../assets/page1.mp4";
import { FaArrowRightLong } from "react-icons/fa6";

const FirstPage = () => {
  return (
    <div className="firstPage">
      <video src={fistpage} autoPlay loop muted></video>

      <div className="details">
        <p>May 22, 2026</p>
        <h1>Starship's Twelfth Flight Test</h1>
        <div className="btn">
          <button>
            Watch <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
