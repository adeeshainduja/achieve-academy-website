import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero/Hero";
import AboutSection from "./components/sections/AboutSection";
import Programs from "./components/sections/Programs";
import Admissions from "./components/sections/Admissions";
import SuccessStories from "./components/sections/SuccessStories";
import CTA from "./components/sections/CTA";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import ChatWidget from "./components/chatbot/ChatWidget";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <AboutSection />
      <Programs />
      <Admissions />
      <SuccessStories />
      <CTA />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;