import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Results from "./components/Results";
import About from "./components/About";
import Expertise from "./components/Expertise";
import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Expertise/>
      <Projects/>
      <CaseStudies/>
      <Results/>
      <Contact/>

  
    </>
  );
}

export default App;