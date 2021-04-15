import "./app.scss";

// Component
import { Benefit, Header, Hero } from "./components";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Benefit />
    </div>
  );
}

export default App;
