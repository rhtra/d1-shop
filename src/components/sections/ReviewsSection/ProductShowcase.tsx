import React from "react";

export type Product = {
  name: string;
  description: string;
  image: string;
};

type Props = {
  products: Product[];
};

export default function ProductShowcase({ products }: Props) {
  return (
    <div className="product-showcase">
      {products.map((product, index) => (
        <div
          className={`product-row ${index % 2 === 1 ? "reverse" : ""}`}
          key={index}
        >
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
