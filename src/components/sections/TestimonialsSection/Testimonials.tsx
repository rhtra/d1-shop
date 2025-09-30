import React from "react";
import "./Testimonials.scss";
import TestimonialsGrid, { Testimonial } from "./TestimonialsGrid";
import BundleSection, { Bundle } from "./Bundle";

type Props = {
  testimonials: Testimonial[];
  bundle: Bundle;
};

export default function Testimonials({ testimonials, bundle }: Props) {
  return (
    <section className="testimonials-section">
      <h2 className="section-title">WHAT OUR FANS SAY</h2>
      <TestimonialsGrid testimonials={testimonials} />
      <BundleSection bundle={bundle} />
    </section>
  );
}
