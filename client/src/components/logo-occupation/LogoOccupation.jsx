import { Link } from "react-router-dom"

const LogoOccupation = ({ elementClass }) => {
    return(
        <div>
            <Link to="/" className={`${elementClass} inline-block mt-auto mb-auto text-nowrap hover:-translate-y-0.5! duration-300`} onClick={() => window.scrollTo(0,0)}>
                <h4 className="logo text-xl! sm:text-2xl! lg:text-3xl!">Landon Linn</h4>
                <p className="text-sm!">Software Developer</p>
            </Link>
        </div>
    )
}

export default LogoOccupation;