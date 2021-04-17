import "./app.scss";

// Component
import {
  Benefit,
  Header,
  Hero,
  Product,
  Testimoni,
  Footer,
} from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefit />
      <Product />
      <Testimoni />
      <Footer />
    </div>
  );
}

export default App;
