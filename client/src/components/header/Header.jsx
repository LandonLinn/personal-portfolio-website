
import { useNavigate, useLocation } from "react-router-dom";
import Primary_btn from "../buttons/primary-button/PrimaryBtn";
import LogoOccupation from "../logo-occupation/LogoOccupation";
import NavLinks from "../navigation/nav-links/NavLinks";

const Header = ({ handleOpen, navigate }) => {

    return(
        <header className="h-auto py-5 w-full border-b border-neutral-gray bg-neutral-black flex fixed z-100">
            <div className="grid grid-cols-3 gap-5 w-full max-md:grid-cols-2 max-md:grid-rows-2 max-sm:grid-rows-1 xl:mx-20 sm:mx-10 max-sm:mx-5">
                {/* Logo & Hamburger menu */}
                <div className="flex gap-4" onClick={handleOpen}>
                    <div className="min-w-6 min-h-6 mt-auto mb-auto sm:hidden">
                        <div className="h-1 bg-white rounded-4xl mb-1.5"></div>
                        <div className="h-1 bg-white rounded-4xl mb-1.5"></div>
                        <div className="h-1 bg-white rounded-4xl"></div>
                    </div>
                    <LogoOccupation />
                </div>
                
                {/* Nav Items */}
                <NavLinks handleOpen={handleOpen} navigate={navigate} />

                {/* Contact Button - Primary */}
                <Primary_btn 
                    btn_text="Contact"
                    link_styles="my-auto ml-auto"
                    link="/#contact"
                    navigate={()=>navigate}
                />
            </div>
        </header>
    )
}

export default Header;