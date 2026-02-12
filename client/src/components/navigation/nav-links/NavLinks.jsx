import {  Link, useLocation, useNavigate } from "react-router-dom";

const NavLinks = ({ linkContainer, linkListContainer, handleOpen, navigate}) => {
    

    return(
        <nav className={`${linkContainer} max-md:row-start-2 max-md:col-span-2  max-sm:hidden justify-self-center content-center`}>
            <ul className={`${linkListContainer} flex max-md:w-screen gap-8 max-md:gap-auto max-md:px-10 justify-between`}>
                {/* Homepage */}
                {/* <li>
                    <NavLink
                        to="/"
                        onClick={() => {handleOpen()}}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li> */}

                {/* Sections */}
                
                <li>
                    <button
                        type="button"
                        onClick={() => {handleOpen(); navigate("about");}}
                        className={`hover:cursor-pointer text-neutral-gray hover:text-white transition-all duration-300 hover:-translate-y-0.5`}
                    >
                        About
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() => {handleOpen(); navigate("skills")}}
                        className={`hover:cursor-pointer text-neutral-gray hover:text-white transition-all duration-300 hover:-translate-y-0.5`}
                    >
                        Skills
                    </button>
                </li>
                {/* Pages */}
                 <li>
                    <Link
                        to="/projects"
                        onClick={() => {handleOpen(); window.scrollTo(0,0);}}
                        className={`inline-block text-neutral-gray hover:text-white transition-all duration-300 hover:-translate-y-0.5`}
                    >
                        Projects
                    </Link>
                </li>
                {/* <li><Link to="/articles" onClick={handleOpen}>Articles</Link></li> */}
            </ul>
        </nav>
    )
}

export default NavLinks;