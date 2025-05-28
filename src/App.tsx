import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Searchbar />
      <Footer />
    </div>
  );
}

export default App;
