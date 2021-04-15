import "./app.scss";

// Component
import { Benefit, Header, Hero, Product, Testimoni } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefit />
      <Product />
      <Testimoni />
    </div>
  );
}

export default App;
