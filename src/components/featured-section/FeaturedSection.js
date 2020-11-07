import React from "react";
import { FeatureButton, FeatureContainer } from "./FeaturedSectionStyles";

const FeaturedSection = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce</p>
      <FeatureButton></FeatureButton>
    </FeatureContainer>
  );
};

export default FeaturedSection;
