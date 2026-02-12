import { Link, NavLink } from "react-router-dom";


const FooterNav = ({ navigate, routeID, routeType, navName }) => {
    
    // Route ID = path (/, /#about, ...)
    // Route Type = Section or Page
    // Nav Name = Name displayed
    

    let footerLink = "";

    if (routeType==="section") {
        // Section
        footerLink = <button
                        type="button"
                        onClick={() => {navigate(routeID);}}
                        className={`hover:cursor-pointer text-neutral-gray hover:text-white transition-all duration-300`}
                    >
                        {navName}
                    </button>
    } 
    else if(routeType==="page"){
        // Page
        footerLink = <Link
                        to={routeID}
                        onClick={() => {window.scrollTo(0,0);}}
                        className={`inline-block text-neutral-gray hover:text-white transition-all duration-300`}
                    >
                        {navName}
                    </Link>
    } else{
        footerLink = <a 
                            href={routeID} 
                            rel="noopener noreferrer" 
                            target="_blank"
                            className={`inline-block text-neutral-gray hover:text-white transition-all duration-300`}
                        >
                            {navName}
                    </a>
    }

    return(
        <li className="text-neutral-gray my-2">{footerLink}</li>
    )
}

export default FooterNav;