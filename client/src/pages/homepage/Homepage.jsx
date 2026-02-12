import { useEffect } from 'react';

import Hero from '../../sections/hero/Hero';
import About from '../../sections/about/About';
import Skills from '../../sections/skills/Skills';
import Contact from '../../sections/contact/Contact';
import LatestBlogs from '../../sections/latest-blogs/LatestBlogs';

const Homepage = ({ setActiveSection }) => {
    useEffect(() => {
        const ids = ["about", "skills", "contact"];
        const els = ids.map((id) => document.getElementById(id)).filter(Boolean);

        // Setup Observer
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((e) => e.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
                if (visible) setActiveSection(visible.target.id);
            },
            {threshold: 0.5}
        );

        els.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    },[setActiveSection]);

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