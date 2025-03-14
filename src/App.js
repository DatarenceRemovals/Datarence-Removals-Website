import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonials";
import Priority from "./Components/Priority";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Quote from "./Components/Quote";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      once: false,  
      duration: 700,  
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <main>
        <Hero />
        <Priority />
        <Services />
        <About />
        <Testimonial />
        <Quote />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
