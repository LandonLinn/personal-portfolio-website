import TaggedElement from "../tagged-element/TaggedElement";



const ProjectDetailsCard = ({ cardClass, cardName, children, childrenClass}) => {
    return(
        <div className={`${cardClass} min-h-80 w-full bg-linear-45 from-accent-black p-4 to-neutral-black bg-dark-gray border border-neutral-gray rounded-2xl`}>
            <TaggedElement elementTag={"h4"} elementContent={cardName} elementContainerClass={"justify-center"} />
            <div className={`${childrenClass} mt-4 `}>
                {children}
            </div>
            
        </div>
    )
}

export default ProjectDetailsCard;