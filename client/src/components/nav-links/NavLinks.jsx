import { Link } from "react-router-dom";

const NavLinks = () => {
    return(
        <nav className="max-md:row-start-2 max-md:col-span-2  max-sm:hidden justify-self-center content-center">
            <ul className="flex max-md:w-screen gap-8 max-md:gap-auto max-md:px-10 justify-between">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/#about">About</a> </li>
                <li><a href="/#skills">Skills</a></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/articles">Articles</Link></li>
            </ul>
        </nav>
    )
}

export default NavLinks;