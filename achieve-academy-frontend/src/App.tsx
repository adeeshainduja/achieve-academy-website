import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero/Hero";
import AboutSection from "./components/sections/AboutSection";
import Programs from "./components/sections/Programs";
import Admissions from "./components/sections/Admissions";
import SuccessStories from "./components/sections/SuccessStories";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <Programs />
      <Admissions />
      <SuccessStories />
    </div>
  );
}

export default App;