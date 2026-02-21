import { useEffect, useState } from "react";
import Section from "../../sections/Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";
import ProjectCard from "../../components/project-card/ProjectCard";
import ProjectFilter from "../../components/buttons/project-filters/ProjectFilter";

const ProjectPage = () => {

    // Project Filter
    const [projectFilter, setProjectFilter] = useState("All Projects");

    const handleFilter = (name) => {
        setProjectFilter(name);
    }

    // Projects from Mongo
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/projects")
            .then(res => res.json())
            .then(data => setProjects(data))
            .catch(err => console.error("Failed to fetch projects:", err));
    }, [])

    return(
        <main className="min-h-screen pt-25!">
            <Section sectionClass="">
                {/* Page Hero */}
                
                <div className="h-40 col-span-full flex flex-col flex-1 mx-auto text-shadow-2xl text-center my-auto z-1">
                    <TaggedElement elementTag={"h1"} elementContent={"Projects"} elementContainerClass={"justify-center"} />
                    <TaggedElement elementTag={"p"} elementContent={"A collection of full-stack, UX, and branding projects focused on building scalable, user-centered digital products."} elementContainerClass={"max-w-250 justify-center"} elementClass={"drop-shadow-2xl"}/>
                    {/* Background */}
                    <div className="absolute inset-0 h-80 object-cover overflow-hidden -z-100 ">
                        <div className="bg-linear-0 from-neutral-black to-transparent absolute inset-0 opacity-60" />
                        <div className="bg-linear-45 from-primary-blue to-accent-blue absolute inset-0 opacity-100" />
                    </div>
                
                </div>
                


                {/* Project Filters */}
                <div className="my-10 w-full overflow-x-scroll mx-auto  col-span-full flex lg:justify-center gap-2 no-scrollbar">
                    <ProjectFilter filterName={"All Projects"} handleFilter={handleFilter} filterClass={projectFilter === "All Projects" ? "activeFilter" : ""}/>
                    <ProjectFilter filterName={"UI/UX"} handleFilter={handleFilter} filterClass={projectFilter === "UI/UX" ? "activeFilter" : ""}/>
                    <ProjectFilter filterName={"Front-End"} handleFilter={handleFilter} filterClass={projectFilter === "Front-End" ? "activeFilter" : ""}/>
                    <ProjectFilter filterName={"Back-End"} handleFilter={handleFilter} filterClass={projectFilter === "Back-End" ? "activeFilter" : ""}/>
                    <ProjectFilter filterName={"Graphic Design"} handleFilter={handleFilter} filterClass={projectFilter === "Graphic Design" ? "activeFilter" : ""}/>
                </div>

                {/* Cards */}
                <div className="col-span-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-rows-auto gap-2 row-span-auto">
                        {projects.map((p) => 
                        p.tags.includes(projectFilter) || projectFilter === "All Projects" ?
                        (
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
                        ) : (
                            <p className="col-span-full mx-auto h-50">No Projects Yet.</p>
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