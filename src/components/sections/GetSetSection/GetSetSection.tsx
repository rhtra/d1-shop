import React from "react";
import "./GetSetSection.scss";

import product from "@/assets/set/product.png";

const GetSetSection: React.FC = () => {
  return (
    <section className="getset">
      <div className="getset__content">
        <span className="getset__tag">Start your 1 minute routine</span>
        <h2 className="getset__title">GET THE SET</h2>
        <p className="getset__description">
          Experience the ultimate simplicity and effectiveness with our complete skincare set. 
          Designed for men who want great skin without the hassle, our set includes everything 
          you need for a daily routine that takes just one minute.
        </p>

        <ul className="getset__list">
          <li>💲 $10 Off Each Pouch</li>
          <li>🔄 Never Run Out</li>
          <li>❌ No Commitment. Cancel Anytime</li>
          <li>⏸ Pause, Delay, or Change Frequency</li>
        </ul>

        <div className="getset__cta">
          <button className="getset__btn">ADD TO CART</button>
          <span className="getset__price">
            <s>$19.99</s>
          </span>
        </div>
      </div>

      <div className="getset__images">
        <img src={product} alt="Product Set" className="getset__img scrub" />
      </div>
    </section>
  );
};

export default GetSetSection;
