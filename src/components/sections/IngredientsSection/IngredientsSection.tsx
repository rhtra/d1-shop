import React from "react";
import "./IngredientsSection.scss";

type Ingredient = {
  image: string;
  name: string;
  description: string;
};

type Props = {
  ingredients: Ingredient[];
};

export default function IngredientsSection({ ingredients }: Props) {
  return (
    <section className="ingredients-section">
      <div className="ingredients-header">
        <h2>
          <span>BEST-IN-CLASS</span> <br /> INGREDIENTS THAT WORK
        </h2>
        <button className="ingredient-button">FULL INGREDIENT LIST</button>
      </div>

      <div className="ingredients-grid">
        {ingredients.map((item, index) => (
          <div className="ingredient-card" key={index}>
            <div className="image-container">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="info">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
