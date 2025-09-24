import React from "react";

type Bundle = {
  title: string;
  description: string;
  checklist: string[];
  price: string;
  images: string[];
};

type Props = {
  bundle: Bundle;
};

export default function BundleSection({ bundle }: Props) {
    return (
      <div className="get-set">
        <div className="text">
          <p className="subtitle">Start your 1 minute routine</p>
          <h3>{bundle.title}</h3>
          <p className="description">{bundle.description}</p>
  
          <ul className="checklist">
            {bundle.checklist.map((item, i) => (
              <li key={i}>✔ {item}</li>
            ))}
          </ul>
  
          <button className="cta">ADD TO CART – {bundle.price}</button>
        </div>
  
        <div className="images">
          <img src={bundle.image} alt="Product Set" />
        </div>
      </div>
    );
}