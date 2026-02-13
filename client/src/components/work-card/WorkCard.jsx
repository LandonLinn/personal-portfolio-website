const WorkCard = ({ imgSrc, altText, workType }) => {
    return(
        <div className="max-p-4 p-2 max-p-8 border flex flex-col justify-center gap-4 bg-linear-45 from-accent-black to-neutral-black bg-dark-gray border-neutral-gray rounded-lg items-center">
            <img src={imgSrc} className="h-8 " alt={`${altText} icon with a blue gradient.`} />
            <p className="font-bold text-center text-nowrap text-sm!">{workType}</p>
        </div>
    )
}

export default WorkCard;