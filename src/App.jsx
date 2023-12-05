import "./App.css";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Logoslide from "./components/Logoslide";
import Footer from "./components/Footer";
import Stickycta from "./components/Stickycta";

function App() {
  return (
    <div>
      <Stickycta />
      <Navbar />
      <Hero />

      <Footer />
    </div>
  );
}

export default App;
