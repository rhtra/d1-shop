import React from "react";

import heroResultImg from "@/assets/results/results-hero.jpg";
import benefit1Img from "@/assets/results/benefit1.jpg";
import benefit2Img from "@/assets/results/benefit2.jpg";
import benefit3Img from "@/assets/results/benefit3.jpg";

import "./ResultsSection.scss";

const ResultsSection: React.FC = () => {
  return (
    <section className="results-section">
      <div className="container">
        {/* Title */}
        <h2 className="section-title">RESULTS YOU CAN</h2>
        <p className="section-subtitle">
          A simple skincare routine is essential to reduce and prevent fine
          lines, wrinkles, dry skin, and dark splotches that start to appear on
          your face as you age.
        </p>
        <p className="section-subtitle">
          If you don’t feel better and see results in 30 days, you can keep the
          product and we’ll send you a full refund.
        </p>

        {/* Hero Image + Quote */}
        <div className="hero-block">
          <img src={heroResultImg} alt="Skincare application" />
          <blockquote>
            “THE ONE MINUTE ROUTINE THAT WILL SAVE YOUR FACE”
          </blockquote>
        </div>

        {/* Features */}
        <div className="features">
          <div>🌿 ALL-NATURAL INGREDIENTS</div>
          <div>🩺 FORMULATED BY DOCTORS</div>
          <div>🔄 100% RISK-FREE RETURNS</div>
          <div>📄 NO PRESCRIPTION</div>
        </div>

        {/* Benefits */}
        <div className="benefits-intro">
          <h3>Daily Benefits. Long-Term Results</h3>
          <p>We started D1 because…</p>
        </div>

        <div className="benefits">
          <div className="benefit-card">
            <img src={benefit1Img} alt="Look fresher" />
            <h4>LOOK FRESHER AND MORE CONFIDENT</h4>
            <p>
              Prevent and reduce fine lines and wrinkles that develop with dry
              skin as you age.
            </p>
          </div>
          <div className="benefit-card">
            <img src={benefit2Img} alt="Prevent aging" />
            <h4>PREVENT AGING AND MAINTAIN YOUTHFUL SKIN</h4>
            <p>
              Prevent and reduce fine lines and wrinkles that develop with dry
              skin as you age.
            </p>
          </div>
          <div className="benefit-card">
            <img src={benefit3Img} alt="Boost skin health" />
            <h4>BOOST YOUR SKIN HEALTH</h4>
            <p>
              Prevent and reduce fine lines and wrinkles that develop with dry
              skin as you age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
