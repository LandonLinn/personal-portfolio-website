import { Link } from "react-router-dom"

const LogoOccupation = () => {
    return(
        <div>
            <Link to="/" className="mt-auto mb-auto text-nowrap">
                <h4 className="logo text-xl! sm:text-2xl! lg:text-3xl!">Landon Linn</h4>
                <p className="text-sm!">Software Developer</p>
            </Link>
        </div>
    )
}

export default LogoOccupation;