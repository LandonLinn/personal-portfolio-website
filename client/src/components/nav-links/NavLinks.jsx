import { Link } from "react-router-dom";

const NavLinks = ({ linkContainer, linkListContainer, handleOpen, isActive}) => {
    return(
        <nav className={`${linkContainer} max-md:row-start-2 max-md:col-span-2  max-sm:hidden justify-self-center content-center`}>
            <ul className={`${linkListContainer} flex max-md:w-screen gap-8 max-md:gap-auto max-md:px-10 justify-between`}>
                <li><a href="/" onClick={handleOpen} className={"active"}>Home</a></li>
                <li><a href="/#about" onClick={handleOpen}>About</a> </li>
                <li><a href="/#skills" onClick={handleOpen}>Skills</a></li>
                <li><Link to="/projects" onClick={handleOpen}>Projects</Link></li>
                <li><Link to="/articles" onClick={handleOpen}>Articles</Link></li>
            </ul>
        </nav>
    )
}

export default NavLinks;