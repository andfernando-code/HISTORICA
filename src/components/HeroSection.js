import React from "react";
import "../App.css";
import "./HeroSection.css";
import { CustomButton } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-2.mp4" autoPlay loop muted />
      <h1>HISTORY AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btn">
        <CustomButton
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </CustomButton>
        <CustomButton
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </CustomButton>
      </div>
    </div>
  );
}

export default HeroSection;
