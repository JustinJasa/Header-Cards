import React from "react";
import Banner from "../images/ford_truck.jpg";
import Button from "./Button";
import "./Hero.css";

function HeroImage() {
  return (
    <div className="image-wrapper">
      <img src={Banner} alt="banner" className="hero-image" />
    </div>
  );
}

function HeroTagline() {
  return (
    <p className="tagline">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rhoncus
      ante et nunc rhoncus vulputate. Aenean feugiat metus vitae tellus commodo,
      eu porttitor quam aliquet. Maecenas ultrices est mauris, ut cursus orci
      pulvinar nec. Maecenas ut cursus nibh, nec lobortis lorem. Proin ut tellus
      nec nunc semper posuere.
    </p>
  );
}

function HeroContent() {
  return (
    <div className="content">
      <HeroImage />
      <div className="hero-overlay">
        <h2 className="title">Welcome to Automotive G</h2>
        <HeroTagline />
        <div className="btn-container">
          <Button data={"Contact Us"} />
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="hero">
      <HeroContent />
    </div>
  );
}

export default Hero;
