import {  NavLink } from "react-router-dom";

const NavLinks = ({ linkContainer, linkListContainer, handleOpen}) => {
    return(
        <nav className={`${linkContainer} max-md:row-start-2 max-md:col-span-2  max-sm:hidden justify-self-center content-center`}>
            <ul className={`${linkListContainer} flex max-md:w-screen gap-8 max-md:gap-auto max-md:px-10 justify-between`}>
                {/* Homepage */}
                <li>
                    <NavLink
                        to="/"
                        onClick={() => handleOpen()}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li>

                {/* Sections */}
                
                <li>
                    <button
                        type="button"
                        onClick={() => handleOpen()}
                        className={` hover:cursor-pointer`}
                    >
                        About
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        onClick={() => handleOpen()}
                        className={`hover:cursor-pointer`}
                    >
                        Skills
                    </button>
                </li>
                {/* Pages */}
                 <li>
                    <NavLink
                        to="/projects"
                        onClick={() => handleOpen()}
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Projects
                    </NavLink>
                </li>
                {/* <li><NavLink to="/articles" onClick={handleOpen}>Articles</NavLink></li> */}
            </ul>
        </nav>
    )
}

export default NavLinks;