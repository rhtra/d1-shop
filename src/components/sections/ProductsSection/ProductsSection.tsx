import React from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import CTAButton from "@/components/ui/CTAButton";
import "./ProductsSection.scss";

const ProductsSection: React.FC = () => (
  <section className="products">
    <SectionTitle title="Our Products" />
    <div className="products__grid">
      <div className="products__card">
        <img src="/placeholder.png" alt="Product" className="products__img" />
        <h3 className="products__name">Cleanser</h3>
        <CTAButton>Add to Cart</CTAButton>
      </div>
      <div className="products__card">
        <img src="/placeholder.png" alt="Product" className="products__img" />
        <h3 className="products__name">Moisturizer</h3>
        <CTAButton>Add to Cart</CTAButton>
      </div>
    </div>
  </section>
);

export default ProductsSection;
