import Hero from '../../sections/hero/Hero';
import About from '../../sections/about/About';
import Skills from '../../sections/skills/Skills';
import Contact from '../../sections/contact/Contact';
import LatestBlogs from '../../sections/latest-blogs/LatestBlogs';

const Homepage = () => {
    return(
        <main>
            <Hero />
            <About />
            <Skills />
            <Contact />
            {/* <LatestBlogs /> */}
        </main>
    )
}

export default Homepage;