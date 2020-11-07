import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import { GlobalStyle } from "./globalStyles";
import { productData, productDataTwo } from "./components/products/productData";
import FeaturedSection from "./components/featured-section/FeaturedSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
      <FeaturedSection />
      <Products heading="Sweet treats for you" data={productDataTwo} />
      <Footer />
    </>
  );
}

export default App;
