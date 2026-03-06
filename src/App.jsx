
import GlowCursor from "./components/GlowCursor.jsx";
import Navbar from "./components/Navber.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen relative">
      <GlowCursor />

      {/* Start adding sections one by one */}
      <div className="relative z-10">
        <Navbar />
        <Hero />

        {/* Uncomment one by one */}
        <About/>
        <Skills/>
        <Projects/>
        <Experience/>
       <Contact/>
       <Footer/>
      </div>
    </div>
  );
}
