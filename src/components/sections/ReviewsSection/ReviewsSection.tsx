import React from "react";
import "./ReviewsSection.scss";
import ProductShowcase, { Product } from "./ProductShowcase";
import CustomerReviews, { Review } from "./CustomerReviews";

type Props = {
  products: Product[];
  reviews: Review[];
};

export default function ReviewsSection({ products, reviews }: Props) {
  return (
    <section className="reviews-section">
      <div className="badge">Just 1 minute a day</div>
      <h2 className="title">THREE PERFECT</h2>
      <p className="subtitle">A game changer for your skin</p>

      <ProductShowcase products={products} />
      <CustomerReviews reviews={reviews} />
    </section>
  );
}
