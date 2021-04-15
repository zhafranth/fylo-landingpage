import "./app.scss";

// Component
import { Benefit, Header, Hero, Product } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefit />
      <Product />
    </div>
  );
}

export default App;
