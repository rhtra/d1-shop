import React from "react";
import Header from "@/components/sections/HeaderSection/Header";
import Hero from "@/components/sections/HeroSection/Hero";
import RoutineSection from "@/components/sections/RoutinesSection/RoutineSection";
import StepsSection from "@/components/sections/StepsSection/StepsSection";
import ResultsSection from "@/components/sections/ResultsSection/ResultsSection";
import GetSetSection from "@/components/sections/GetSetSection/GetSetSection";
import IngredientsSection from "@/components/sections/IngredientsSection/IngredientsSection";
import ReviewsSection from "@/components/sections/ReviewsSection/ReviewsSection";
import Testimonials from "@/components/sections/TestimonialsSection/Testimonials";
import Footer from "@/components/sections/FooterSection/Footer";

import { customerReviews, ingredients, products, bundle, testimonials } from '@/components/data';

import heroProductImage from "@/assets/hero/product.png";

import routineProductImage from "@/assets/routine/productImage.png";
import feature1 from "@/assets/routine/benefit1.jpg";
import feature2 from "@/assets/routine/benefit2.jpg";
import feature3 from "@/assets/routine/benefit3.jpg";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero productImage={heroProductImage} />
      <RoutineSection productImage={routineProductImage} feature1={feature1} feature2={feature2} feature3={feature3} />
      <StepsSection />
      <ResultsSection />
      <GetSetSection />
      <IngredientsSection ingredients={ingredients}/>
      <ReviewsSection products={products} reviews={customerReviews} products={products} />
      <Testimonials testimonials={testimonials} bundle={bundle} />;
      <Footer />
    </>
  );
};

export default App;
