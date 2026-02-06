const IconLink = ({ iconName, link, img }) => {
    return(
        <div className="h-6 min-w-8">
            <a href={link} target="_blank" rel="noreferrer noopener">
                <img src={img} alt={`${iconName} Icon`} />
            </a>
        </div>
    )
}

export default IconLink;