import Primary_btn from "../primary_button/Primary_btn";
import { useState } from "react";

const Header = () => {

    const [linkActive, setLinkActive] = useState("");

    return(
        <header className="h-auto py-5 w-full border-b border-neutral-gray bg-neutral-black flex fixed z-100">
            <div className="grid grid-cols-3 gap-5 w-full max-md:grid-cols-2 max-md:grid-rows-2 max-sm:grid-rows-1 xl:mx-20 sm:mx-10 max-sm:mx-5">
                {/* Logo & Hamburger menu */}
                <div className="flex gap-4">
                    <div className="min-w-6 min-h-6 mt-auto mb-auto sm:hidden">
                        <div className="h-1 bg-white rounded-4xl mb-1.5"></div>
                        <div className="h-1 bg-white rounded-4xl mb-1.5"></div>
                        <div className="h-1 bg-white rounded-4xl"></div>
                    </div>
                    <a href="/" className="mt-auto mb-auto text-nowrap">
                        <h4 className="logo">Landon Linn</h4>
                        <p>Software Developer</p>
                    </a>
                </div>
                
                {/* Nav Items */}
                <nav className="max-md:row-start-2 max-md:col-span-2 max-sm:hidden justify-self-center content-center">
                    <ul className="flex gap-8">
                        <li><a href="/" className="active">Home</a></li>
                        <li><a href="/about">About</a> </li>
                        <li><a href="/skills">Skills</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/articles">Articles</a></li>
                    </ul>
                </nav>

                {/* Contact Button - Primary */}
                <Primary_btn 
                    btn_text="Contact"
                    link_styles="my-auto ml-auto"
                />
            </div>
        </header>
    )
}

export default Header;