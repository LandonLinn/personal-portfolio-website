import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Hero from '../../sections/hero/Hero';
import About from '../../sections/about/About';
import Skills from '../../sections/skills/Skills';
import Contact from '../../sections/contact/Contact';
import LatestBlogs from '../../sections/latest-blogs/LatestBlogs';

const Homepage = () => {

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const id = location.state?.scrollTo;
        if (!id) return;

        requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth",
        });
        });
        navigate(".", { replace: true, state: {} });
    }, [location.state, navigate]);
    

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