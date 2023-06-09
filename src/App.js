import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-trck-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero" className=" snap-start">
        <Hero />
      </section>
      {/* about */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* Experience */}
      <section id="exper" className="snap-center">
        <Experience />
      </section>
      {/* skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* Prooject */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* contact-me */}
      <section className="snap-center">
        <Contact />
      </section>
    </div>
  );
}

export default App;
