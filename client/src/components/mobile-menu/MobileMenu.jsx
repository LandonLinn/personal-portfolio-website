import LogoOccupation from "../logo-occupation/LogoOccupation";
import NavLinks from "../nav-links/NavLinks";

const MobileMenu = ({ isOpen, handleOpen }) => {
    return(
        <aside className={`${isOpen === true ? "visible" : "hidden"} z-100 fixed sm:hidden`}>
            {/* Background */}
            <div className="absolute top-0 left-0 z-99 w-screen h-screen bg-dark-gray opacity-80"></div>

            {/* Menu */}
            <div className="absolute top-0 bg-neutral-black h-screen w-[320px] border-r border-neutral-gray z-101">
                {/* Menu Header */}
                <div className="flex justify-between border-b border-neutral-gray p-5">
                    <LogoOccupation />
                    {/* Close Button */}
                    <p className="" onClick={handleOpen}> &#88;</p>
                </div>
                {/* Links */}
                <div className="my-auto py-10">
                    <NavLinks linkContainer={"flex! mx-auto text-2xl"} linkListContainer={"flex flex-col"} handleOpen={handleOpen} />
                </div>
            </div>
            

        </aside>
    )
}

export default MobileMenu;