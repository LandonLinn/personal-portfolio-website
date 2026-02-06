import './App.css';

// Components
import Header from './components/header/Header';
import Hero from './sections/hero/Hero';
import About from './sections/about/About';
import Skills from './sections/skills/Skills';
import Projects from './sections/projects/Projects';
import Contact from './sections/contact/Contact';
import LatestBlogs from './sections/latest-blogs/LatestBlogs';
import Footer from './components/footer/Footer';

function App() {


  return (
    <>
      {/* <Header/> */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <LatestBlogs />
      <Footer />
    </>
  )
}

export default App
