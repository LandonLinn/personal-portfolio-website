import SocialIcon from "../social-icon/SocialIcon";


const SocialLinks = ({ linkClass, svgClass }) => {
    return(
        <div className="flex gap-2">
            {/* LinkedIn */}
            <SocialIcon 
                iconName="LinkedIn"
                img="/social-icons/linkedin.png"
                link="https://www.linkedin.com/in/landon-linn/"
            />

            {/* GitHub */}
            <SocialIcon 
                iconName="Github"
                img="/social-icons/github.png"
                link="https://github.com/LandonLinn"
            />

            {/* Behance */}
            <SocialIcon 
                iconName="Behance"
                img="/social-icons/behance.png"
                link="https://www.behance.net/landonlinn1"
            />

            {/* Upwork */}
            <SocialIcon 
                iconName="Upwork"
                img="/social-icons/upwork.png"
                link="https://upwork.com/freelancers/~013fc1527a77ae991e"
            />

            {/* Fiverr */}
            <SocialIcon 
                iconName="Fiverr"
                img="/social-icons/fiverr.png"
                link="https://www.fiverr.com/sellers/linnium"
            />

        </div>
        
    )
}

export default SocialLinks;