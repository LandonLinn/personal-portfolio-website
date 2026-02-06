import IconLink from "../icon-link/IconLink";


const SocialLinks = ({ linkClass, svgClass }) => {
    return(
        <div className="flex gap-2">
            {/* LinkedIn */}
            <IconLink 
                iconName=""
                img=""
                link="https://www.linkedin.com/in/landon-linn/"
            />

            {/* GitHub */}
            <IconLink 
                iconName=""
                img=""
                link="https://github.com/LandonLinn"
            />

            {/* Behance */}
            <IconLink 
                iconName=""
                img=""
                link="https://www.behance.net/landonlinn1"
            />

            {/* Upwork */}
            <IconLink 
                iconName=""
                img=""
                link="https://upwork.com/freelancers/~013fc1527a77ae991e"
            />

            {/* Fiverr */}
            <IconLink 
                iconName=""
                img=""
                link="https://www.fiverr.com/sellers/linnium"
            />

        </div>
        
    )
}

export default SocialLinks;