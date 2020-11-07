import React from "react";
import { FeatureButton, FeatureContainer } from "./FeaturedSectionStyles";

const FeaturedSection = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with goodness</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default FeaturedSection;
