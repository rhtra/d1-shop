import React from "react";
import "./Hero.scss";

interface HeroProps {
  productImage: string;
}

const Hero: React.FC<HeroProps> = ({ productImage }) => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1>
          SKINCARE FOR GUYS <br /> THAT AREN’T INTO SKINCARE
        </h1>
        <p className="hero__tagline">TRY THE ONE MINUTE SKINCARE ROUTINE</p>
        <button className="hero__cta">TRY TODAY!</button>

        <div className="hero__testimonial">
          <div className="hero__stars">★★★★★</div>
          <p className="hero__quote">
            “I LOVE THIS STUFF, IT TOTALLY CHANGED THE GAME FOR ME”
          </p>
          <div className="hero__author">
            <span className="hero__avatar">P.S</span>
            <span>PETER S.</span>
          </div>
        </div>
      </div>

      <div className="hero__images">
        <img src={productImage} alt="Moisturizer" className="hero__img hero__img--moisturizer" />
      </div>
    </section>
  );
};

export default Hero;
