import { getYear } from "../../utils/date";
import LogoOccupation from "../logo-occupation/LogoOccupation";
import FooterNav from "../navigation/footer-nav/FooterNav";
import SocialLinks from "../social-links/SocialLinks";

const Footer = ({ navigate }) => {
    return(
        <footer className="border-t border-neutral-gray">
            {/* Content */}
            <div className="min-h-60 h-auto px-20 md:px-10 xl:px-20 py-8 text-center sm:text-left grid grid-cols-1 grid-rows-[auto_auto_auto] md:grid-rows-1 md:grid-cols-6 ">
                <LogoOccupation elementClass={"mb-4! "}/>
                
                {/* Explore Nav */}
                <div className="col-start-1  md:col-start-3">
                    <p className="font-bold text-primary-blue">Explore</p>
                    <ul className="mt-4">
                        <FooterNav navigate={navigate} routeType={"section"} routeID={"about"} navName={"About"}  />
                        <FooterNav navigate={navigate} routeType={"section"} routeID={"skills"} navName={"Skills"}  />
                        <FooterNav navigate={navigate} routeType={"page"} routeID={"/projects"} navName={"Projects"}  />
                    </ul>
                </div>
                
                {/* Work With Me Nav */}
                <div>
                    <p className="font-bold text-primary-blue">Work with Me</p>
                    <ul className="mt-4">
                        <FooterNav navigate={navigate} routeType={"section"} routeID={"contact"} navName={"Contact"}  />
                        <FooterNav navigate={navigate} routeType={"link"} routeID={"https://linnium.com/"} navName={"Linnium"}  />
                    </ul>

                </div>
                
            </div>

            {/* Copyright & Socials */}
            <div className="md:h-[10dvh] md:px-10 xl:px-20 py-4 border-t border-neutral-gray flex flex-col md:flex-row gap-2 md:content-center md:justify-between items-center">
                <p className="text-sm!">&copy; {getYear()} Landon Linn</p>
                {/* Social Links */}
                <SocialLinks />
                
            </div>
        </footer>
    )
}

export default Footer;