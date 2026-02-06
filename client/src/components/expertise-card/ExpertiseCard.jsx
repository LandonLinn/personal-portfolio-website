const ExpertiseCard = ({expertiseName, expertiseDesc, expertiseIcon, expertiseClass}) => {
    return(
        <div className={`${expertiseClass} border-neutral-gray border rounded-2xl text-left p-5 flex flex-col gap-3`}>
            {/* Icon */}
            <div className="h-15 w-15 rounded-xl flex justify-center content-center bg-linear-45 from-primary-blue to-accent-blue">
                <svg className="h-auto w-8 fill-white">{expertiseIcon}</svg>
            </div>
            {/* Text Content */}
            <p><strong>{expertiseName}</strong></p>
            <p>{expertiseDesc}</p>
        </div>
    )
}

export default ExpertiseCard;