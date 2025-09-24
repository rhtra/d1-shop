import React from "react";
import "./RoutineSection.scss";

interface RoutineProps {
  productImage: string;
  feature1: string;
  feature2: string;
  feature3: string;
}

const RoutineSection: React.FC<RoutineProps> = ({
  productImage,
  feature1,
  feature2,
  feature3,
}) => {
  return (
    <section className="routine">
      <div className="routine__topbar">
        Just <span>one minute</span> a day will make your skin look healthier and younger
      </div>

      <div className="routine__content">
        <div className="routine__text">
          <h2>A SIMPLE ROUTINE THAT WORKS</h2>
          <p>
            Say goodbye to complicated skincare routines. Our mens’ skincare line is
            designed for simplicity and effectiveness. With our lightweight formulas, you
            can achieve healthier and younger-looking skin with minimal effort. Perfect
            for guys who are new to skincare or just want to keep it simple.
          </p>

          <ul className="routine__checklist">
            <li>✔ Lightweight formulas</li>
            <li>✔ Easy to use formats</li>
            <li>✔ Clean ingredients</li>
            <li>✔ Everything you need, nothing you don’t</li>
          </ul>
        </div>

        <div className="routine__imageWrapper">
          <img src={productImage} alt="D1 Product Box" className="routine__box" />
        </div>
      </div>

      <div className="routine__features">
        <div className="feature">
          <img src={feature1} alt="Cleanser" />
          <p>Wash your face with<br />our Bamboo Charcoal Cleanser</p>
        </div>
        <div className="feature">
          <img src={feature2} alt="Moisturizer" />
          <p>Apply a dime size amount of<br />All Day Moisturizer evenly to your face</p>
        </div>
        <div className="feature">
          <img src={feature3} alt="Eye Cream" />
          <p>Apply small amount of<br />our Eye Cream under your eyes<br />and around the sides</p>
        </div>
      </div>

    </section>
  );
};

export default RoutineSection;
