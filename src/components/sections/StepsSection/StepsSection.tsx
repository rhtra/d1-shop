import React from "react";
import "./StepsSection.scss";
import StepCard from "./StepCard";

import step1Img from "@/assets/steps/step1.jpg"; // Replace with your images
import step2Img from "@/assets/steps/step2.jpg";
import step3Img from "@/assets/steps/step3.jpg";

import cleanserImg from "@/assets/cleanser.png";
import moisturizerImg from "@/assets/moisturizer.png";
import eyecreamImg from "@/assets/eyecream.png";

const StepsSection: React.FC = () => {
  const steps = [
    {
      number: "1",
      image: step1Img,
      productImage: cleanserImg,
      description: "Wash your face with our Bamboo Charcoal Cleanser",
    },
    {
      number: "2",
      image: step2Img,
      productImage: moisturizerImg,
      description:
        "Apply a dime size amount of All Day Moisturizer evenly to your face",
    },
    {
      number: "3",
      image: step3Img,
      productImage: eyecreamImg,
      description:
        "Apply small amount of our Eye Cream under your eyes and around the sides",
    },
  ];

  return (
    <section className="steps-section">
      <p className="steps-subtitle">Heres how D1 works</p>
      <div className="steps-timer">⏱</div>
      <h2 className="steps-title">JUST 1 MINUTE A</h2>

      <div className="steps-cards">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
