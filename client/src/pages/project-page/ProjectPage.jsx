import { useState } from "react";
import Section from "../../sections/Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";
import { mockProjects } from "../../utils/mockProjectData";
import ProjectCard from "../../components/project-card/ProjectCard";
import ProjectFilter from "../../components/buttons/project-filters/ProjectFilter";

const ProjectPage = () => {

    // Project Filter
    const [projectFilter, setProjectFilter] = useState("All Projects");

    const filteredProjects = projectFilter === "All Projects"
        ? mockProjects
        : mockProjects.filter((project) => project.tags.includes(projectFilter)

    );

    const handleFilter = (name) => {
        setProjectFilter(name);
    }

    return(
        <main className="min-h-screen pt-20!">
            <Section sectionClass="min-h-screen">
                {/* Page Hero */}
                
                <div className="col-span-full flex flex-col mx-auto text-center z-1">
                    <TaggedElement elementTag={"h1"} elementContent={"Projects"} elementContainerClass={"justify-center"} />
                    <p className="w-160">A collection of full-stack, UX, and branding projects focused on building scalable, user-centered digital products.</p>
                </div>
                {/* Background */}
                <div className="bg-linear-0 from-neutral-black to-neutral-gray absolute top-0 left-0 w-full h-80 opacity-50 z-0"/>

                {/* Page Content */}


                {/* Project Filters */}
                <div className="mx-auto mt-10 col-span-full flex gap-2">
                    <ProjectFilter filterName={"All Projects"} handleFilter={handleFilter} filterClass={projectFilter === "All Projects" ? "activeFilter" : ""}/>
                    <ProjectFilter filterName={"UI/UX"} handleFilter={handleFilter} filterClass={projectFilter === "UI/UX" ? "activeFilter" : ""}/>
                    <ProjectFilter filterName={"Front-End"} handleFilter={handleFilter} filterClass={projectFilter === "Front-End" ? "activeFilter" : ""}/>
                    <ProjectFilter filterName={"Back-End"} handleFilter={handleFilter} filterClass={projectFilter === "Back-End" ? "activeFilter" : ""}/>
                    <ProjectFilter filterName={"Graphic Design"} handleFilter={handleFilter} filterClass={projectFilter === "Graphic Design" ? "activeFilter" : ""}/>
                </div>

                {/* Cards */}
                <div className="col-span-full">
                    <p className="pb-6 text-center"><strong>{projectFilter}</strong></p>
                    <div className="grid grid-cols-4 grid-rows-auto gap-2 row-span-auto">
                        {filteredProjects.length === 0 ? (
                            <TaggedElement elementTag={"h4"} elementContent={"No projects to show yet."} elementContainerClass={"col-span-full justify-center"}/>
                        ) : (
                        filteredProjects.map((project) => 
                                (
                                    <ProjectCard 
                                        key={project.id}
                                        coverImg={project.coverImg}
                                        title={project.title} 
                                        tags={project.tags} 
                                        date={project.date}
                                        description={project.description}
                                        links={project.links}
                                    />
                                )
                            )
                        )}
                        
                    </div>

                </div>
                

                {/* Return Home */}
                <TaggedElement elementTag={"button"} elementContent={"Return Home"} elementLink={"/"} elementContainerClass={"col-span-full mt-auto mx-auto"} />
            </Section>
        </main>
    )
}

export default ProjectPage;