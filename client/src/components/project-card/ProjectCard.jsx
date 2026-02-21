import { Link } from "react-router-dom";

const ProjectCard = ({ coverImg, imgs, tags, name, date, description, links, slug }) => {
    return(
        <div className="min-h-110 h-full max-h-150 w-full p-2 bg-linear-45 from-accent-black to-neutral-black bg-dark-gray border border-neutral-gray rounded-2xl flex flex-col ">
           
            {/* Image Wrapper */}
            <div className={"w-full h-[45%] rounded-xl flex items-center justify-center"}>
                <img className={"w-full h-full object-cover rounded-md"} src={coverImg} alt={`${name} project cover image`} />
            </div>

            {/* Card info */}
            <div className="flex flex-col flex-1 text-left mt-2 px-2">
                {/* Date */}
                <p className="text-neutral-gray">{date}</p>

                {/* Name */}
                <p className="font-bold! mb-2">{name}</p>

                {/* Tags */}                
                <div className="flex gap-2 my-1 overflow-clip">
                    {

                        tags.map((tag, i) => (
                            <p key={i} 
                                className={`
                                    ${  
                                        tag==="UI/UX" ? "ui-tag" : "" ||
                                        tag==="Front-End" ? "front-tag" : "" ||
                                        tag==="Back-End" ? "back-tag" : "" ||
                                        tag==="Graphic Design" ? "graphic-tag" : ""
                                    } 
                                    w-fit 
                                    px-4 
                                    py-0 
                                    rounded-full
                                    text-nowrap
                                `}
                            >
                                {tag}
                            </p>
                        ))}   
                </div>

                {/* Description */}
                <p className="line-clamp-3">{description}</p>

                {/* View Buttons */}
                <div className="flex mt-auto justify-between">
                    {/* View Project (Open Modal) */}
                    <Link to={`/api/projects/${slug}`} onClick={() => scrollTo(0,0)} className="flex items-center gap-2 transition-all duration-300 hover:gap-3">
                        <p>View Project</p>
                        <p>&rarr;</p>
                    </Link>

                    {/* Demo (Open Live Link) */}
                        <a href={links?.live} rel="noopener norefferer" target="_blank" className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5">
                            <p>Demo</p>
                            <svg fill="#fff" width="14px" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M960 704c-35.346 0-64 28.654-64 64v64c0 35.346-28.654 64-64 64H192c-35.346 0-64-28.654-64-64V192c0-35.346 28.654-64 64-64h64c35.346 0 64-28.654 64-64S291.346 0 256 0h-64C85.961 0 0 85.961 0 192v640c0 106.039 85.961 192 192 192h640c106.039 0 192-85.961 192-192v-64c0-35.346-28.654-64-64-64z"/><path d="M1023.876 51.52c0-1.92 0-3.84-1.6-5.44a63.957 63.957 0 00-1.92-6.4 63.973 63.973 0 00-3.2-6.4s0-3.2-2.56-4.8a63.989 63.989 0 00-17.6-17.6L991.876 8l-6.08-3.2-6.72-1.92h-5.44A64.028 64.028 0 00959.876 0h-384c-35.346 0-64 28.654-64 64s28.654 64 64 64h229.44l-370.56 370.88c-25.007 25.007-25.007 65.553 0 90.56s65.553 25.007 90.56 0l370.56-370.88V448c0 35.346 28.654 64 64 64s64-28.654 64-64V64c.407-4.15.407-8.33 0-12.48z"/></svg>
                        </a>
                </div>
                
            </div>
        </div>
    )
}

export default ProjectCard;