import React from "react";

export type Testimonial = {
  image: string;
  title: string;
  price: string;
  rating: number;
};

type Props = {
  testimonials: Testimonial[];
};

export default function TestimonialsGrid({ testimonials }: Props) {
  return (
    <div className="testimonials-grid">
      {testimonials.map((t, index) => (
        <div className="testimonial-card" key={index}>
          <div className="image-container">
            <img src={t.image} alt={t.title} />
            <button className="play-btn">▶</button>
          </div>
          <div className="testimonial-info">
            <div className="rating">
              {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
            </div>
            <h4>{t.title}</h4>
            <p className="price">{t.price}</p>
            <button className="add-btn">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
}
