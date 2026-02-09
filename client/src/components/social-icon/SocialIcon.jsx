const SocialIcon = ({ iconName, link, img }) => {
    return(
        <a href={link} target="_blank" rel="noreferrer noopener">
            <div className="max-w-14 p-3 rounded-full border-2 border-neutral-gray hover:border-dark-gray hover:bg-dark-gray">
                    <img src={img} alt={`${iconName} Icon`} className="max-w-8 h-4" />
            </div>
        </a>
    )
}

export default SocialIcon;