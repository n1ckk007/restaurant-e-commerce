import Hero from "./components/hero/Hero";
import Products from "./components/products/Products";
import { GlobalStyle } from "./globalStyles";
import { productData } from "./components/products/productData";

function App() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favourite" data={productData} />
    </>
  );
}

export default App;
