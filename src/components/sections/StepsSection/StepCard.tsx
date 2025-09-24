import React from "react";
import "./StepCard.scss";

interface StepCardProps {
  number: string;
  image: string;
  productImage: string;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({
  number,
  image,
  productImage,
  description,
}) => {
  return (
    <div className="step-card">
      <div className="step-card__image-wrapper">
        <span className="step-card__number">{number}</span>
        <img src={image} alt={`Step ${number}`} className="step-card__image" />
      </div>
      <div className="step-card__description">
        <img src={productImage} alt="Product" className="step-card__product" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default StepCard;
