import React from "react";

export type Review = {
  rating: number;
  text: string;
  name: string;
  role: string;
  initials: string;
};

type Props = {
  reviews: Review[];
};

export default function CustomerReviews({ reviews }: Props) {
  return (
    <div className="customer-reviews">
      <h3 className="reviews-heading">Here is what our customers say</h3>
      <div className="reviews-grid">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <div className="stars">
              {"★".repeat(review.rating)}
              {"☆".repeat(5 - review.rating)}
            </div>
            <p className="review-text">“{review.text}”</p>
            <div className="review-footer">
              <div className="avatar">{review.initials}</div>
              <div className="author">
                <h4>{review.name}</h4>
                <p>{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
