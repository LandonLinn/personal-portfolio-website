import Section from "../Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";
import ProjectCard from "../../components/project-card/ProjectCard";
import { mockProjects } from "../../utils/mockProjectData";

const Projects = () => {
    return(
        <Section sectionClass="h-screen col-span-full text-center flex align-center scroll-mt-25">
            <div className="text-center col-span-full flex flex-col">
                <TaggedElement elementTag={"h2"} elementContent={"Featured Projects"} elementContainerClass={"justify-center"}/>

                {/* Projects Shown (4 best) */}
                <div className="mb-4 w-full h-full grid grid-cols-4 grid-rows-[420px] gap-2">
                    {mockProjects.map((projects) => (
                        <ProjectCard 
                            key={projects.id}
                            imgs={projects.images}
                            title={projects.title} 
                            tags={projects.tags} 
                            date={projects.date}
                            description={projects.description}
                            links={projects.links}
                        />
                    ))}
                </div>
                {/* View all button */}
                <TaggedElement elementTag={"button"} elementContent={"View All"} elementLink={"/projects"} elementContainerClass={"justify-center mt-auto"} />
            </div>
        </Section>
    )
}

export default Projects;