import Section from "../Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";
import ProjectCard from "../../components/project-card/ProjectCard";
import { useState, useEffect } from "react";

const Projects = () => {
    // Projects from Mongo
        const [projects, setProjects] = useState([]);
    
        useEffect(() => {
            fetch("http://localhost:5000/api/projects")
                .then(res => res.json())
                .then(data => setProjects(data))
                .catch(err => console.error("Failed to fetch projects:", err));
        }, [])

    return(
        <Section sectionClass="col-span-full text-center flex align-center scroll-mt-25">
            <div className="text-center col-span-full flex flex-col">
                <TaggedElement elementTag={"h2"} elementContent={"Featured Projects"} elementContainerClass={"justify-center"}/>

                {/* Projects Shown (4 best) */}
                <div className="mb-4 md:w-full h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-auto gap-2">
                    {projects.map((p) => 
                       p.featured === true ? (
                            <ProjectCard
                                key={p._id}
                                slug={p.slug}
                                coverImg={p.coverImg}
                                date={p.date}
                                name={p.name}
                                tags={p.tags}
                                description={p.description}
                                links={p.links}
                            />
                        ) : null
                    )}
                </div>
                {/* View all button */}
                <TaggedElement elementTag={"button"} elementContent={"View All"} elementLink={"/projects"} elementContainerClass={"justify-center mt-auto"} />
            </div>
        </Section>
    )
}

export default Projects;