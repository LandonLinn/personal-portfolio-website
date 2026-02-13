const ProjectCard = ({ coverImg, imgs, tags, title, date, description, links }) => {
    return(
        <div className="h-full w-full p-2 bg-linear-45 from-accent-black to-neutral-black bg-dark-gray border border-neutral-gray rounded-lg ">
           
            {/* Image Wrapper */}
            <div className={"w-full h-[45%] border border-neutral-gray rounded-lg bg-white flex items-center justify-center"}>
                <img className={"w-full h-full rounded-md"} src={coverImg} alt={`${title} project cover image`} />
            </div>

            {/* Card info */}
            <div className="flex flex-col flex-1 text-left mt-2 px-2 bg-red-100">
                {/* Date */}
                <p className="text-neutral-gray">{date}</p>

                {/* Name */}
                <p className="font-bold! mb-2">{title}</p>

                {/* Tags */}                
                <div className="flex gap-2 my-1">
                    <p className="bg-red-200 w-fit px-4 py-0 rounded-full">tag</p>
                    <p className="bg-red-200 w-fit px-4 py-0 rounded-full">tag</p>
                    <p className="bg-red-200 w-fit px-4 py-0 rounded-full">tag</p>
                </div>

                {/* Description */}
                <p>{description}</p>

                {/* View Buttons */}
                <div className="">
                    {/* View Project (Open Modal) */}
                    <a href="/" className="">View Project &rarr;</a>

                    {/* Demo (Open Live Link) */}
                    <a href="/" className="">Demo</a>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard;