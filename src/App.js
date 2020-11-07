import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import { GlobalStyle } from "./globalStyles";
import { productData } from "./components/products/productData";
import FeaturedSection from "./components/featured-section/FeaturedSection";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
      <FeaturedSection />
    </>
  );
}

export default App;
