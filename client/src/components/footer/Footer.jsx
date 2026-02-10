import { getYear } from "../../utils/date";
import LogoOccupation from "../logo-occupation/LogoOccupation";
import SocialLinks from "../social-links/SocialLinks";

const Footer = () => {
    return(
        <footer className="border-t border-neutral-gray">
            {/* Content */}
            <div className="min-h-60 h-auto px-20 md:px-10 xl:px-20 py-4 text-center sm:text-left grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-6 ">
                <LogoOccupation />
                
                <div className="col-start-1 md:col-start-3">
                    <p className="font-bold text-primary-blue">Explore</p>
                </div>

                <div>
                    <p className="font-bold text-primary-blue">Work with Me</p>

                </div>
                
            </div>

            {/* Copyright & Socials */}
            <div className="h-[20dvh] md:h-[15dvh] px-20 md:px-10 xl:px-20 py-4 border-t border-neutral-gray flex flex-col md:flex-row gap-2 content-center justify-between items-center">
                <p>&copy; {getYear()} Landon Linn</p>
                {/* Social Links */}
                <SocialLinks />
                
            </div>
        </footer>
    )
}

export default Footer;