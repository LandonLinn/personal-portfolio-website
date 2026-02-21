import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TaggedElement from "../../components/tagged-element/TaggedElement";
import Section from "../../sections/Section";
import ProjectDetailsCard from "../../components/project-details-card/ProjectDetailsCard";

const ProjectDetails = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);


  useEffect(() => {
    fetch(`http://localhost:5000/api/projects/${slug}`)
      .then(r => r.json())
      .then(data => setProject(data))
      .catch(e => console.error("Failed to fetch project:", e));
  }, [slug]);

  return (
    <main>
        {
            !project ? 
                (
                    <h1 className="pt-30 text-center">Loading...</h1>
                ) : (
                    <Section sectionClass={"col-span-full grid-rows-[300px_auto] !pt-25"}>
                        {/* Title */}
                        <div className="col-span-full flex flex-col flex-1 mx-auto text-shadow-2xl text-center my-auto z-1 ">
                            <TaggedElement elementTag={"h1"} elementContent={project.name} elementContainerClass={"justify-center"} elementClass={"drop-shadow-2xl"} />
                            <TaggedElement elementTag={"p"} elementContent={project.description} elementContainerClass={"max-w-250 justify-center"} elementClass={"drop-shadow-2xl"}/>
                            <div className={"w-50 flex justify-between mx-auto mt-2"}>
                                {/* Demo */}
                                <a href={project.links?.live} rel="noopener norefferer" target="_blank" className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 drop-shadow-2xl">
                                    <p>Demo</p>
                                    <svg fill="#fff" width="14px" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M960 704c-35.346 0-64 28.654-64 64v64c0 35.346-28.654 64-64 64H192c-35.346 0-64-28.654-64-64V192c0-35.346 28.654-64 64-64h64c35.346 0 64-28.654 64-64S291.346 0 256 0h-64C85.961 0 0 85.961 0 192v640c0 106.039 85.961 192 192 192h640c106.039 0 192-85.961 192-192v-64c0-35.346-28.654-64-64-64z"/><path d="M1023.876 51.52c0-1.92 0-3.84-1.6-5.44a63.957 63.957 0 00-1.92-6.4 63.973 63.973 0 00-3.2-6.4s0-3.2-2.56-4.8a63.989 63.989 0 00-17.6-17.6L991.876 8l-6.08-3.2-6.72-1.92h-5.44A64.028 64.028 0 00959.876 0h-384c-35.346 0-64 28.654-64 64s28.654 64 64 64h229.44l-370.56 370.88c-25.007 25.007-25.007 65.553 0 90.56s65.553 25.007 90.56 0l370.56-370.88V448c0 35.346 28.654 64 64 64s64-28.654 64-64V64c.407-4.15.407-8.33 0-12.48z"/></svg>
                                </a>

                                <p>|</p>

                                {/* GitHub */}
                                <a href={project.links?.github} rel="noopener norefferer" target="_blank" className="flex items-center gap-2 transition-all duration-300 hover:-translate-y-0.5 drop-shadow-2xl">
                                    <p>Github</p>
                                    <svg fill="#fff" width="14px" height="100%" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M960 704c-35.346 0-64 28.654-64 64v64c0 35.346-28.654 64-64 64H192c-35.346 0-64-28.654-64-64V192c0-35.346 28.654-64 64-64h64c35.346 0 64-28.654 64-64S291.346 0 256 0h-64C85.961 0 0 85.961 0 192v640c0 106.039 85.961 192 192 192h640c106.039 0 192-85.961 192-192v-64c0-35.346-28.654-64-64-64z"/><path d="M1023.876 51.52c0-1.92 0-3.84-1.6-5.44a63.957 63.957 0 00-1.92-6.4 63.973 63.973 0 00-3.2-6.4s0-3.2-2.56-4.8a63.989 63.989 0 00-17.6-17.6L991.876 8l-6.08-3.2-6.72-1.92h-5.44A64.028 64.028 0 00959.876 0h-384c-35.346 0-64 28.654-64 64s28.654 64 64 64h229.44l-370.56 370.88c-25.007 25.007-25.007 65.553 0 90.56s65.553 25.007 90.56 0l370.56-370.88V448c0 35.346 28.654 64 64 64s64-28.654 64-64V64c.407-4.15.407-8.33 0-12.48z"/></svg>
                                </a>
                            </div>
                            {/* Background */}
                            <div className="absolute inset-0 h-100 object-cover overflow-hidden -z-100 ">
                                <div className="bg-linear-0 from-neutral-black to-transparent absolute inset-0 opacity-60" />
                                <div className="bg-linear-45 from-primary-blue to-accent-blue absolute inset-0 opacity-100" />
                                <img src={project.coverImg} alt="" className="opacity-10 absolute max-sm:hidden "/>
                            </div>
                        </div>
                        
                        
                        {/* Content */}
                        <div className="mt-8 grid grid-cols-1 col-span-full md:grid-cols-3 grid-rows-auto gap-2 w-full">

                            {/* Tech Stack */}
                            <ProjectDetailsCard cardName={"Tech Stack"} cardClass={""} >
                                {
                                    <ul className="ml-4 list-disc!">
                                        {
                                        project.tech_stack.map((s, i) => (
                                        <li key={i}>{s}</li>
                                    ))}
                                    </ul>
                                }

                            </ProjectDetailsCard>

                            {/* Feature & Notes on Feature */}
                            <ProjectDetailsCard cardName={"Features"} >
                                
                                    <ul className="ml-4 list-decimal ">
                                        {
                                            project.features.map((f, i) => (
                                                <li key={i} className="text-bold">{f}</li>
                                            ))
                                        }
                                    </ul>

                                    <TaggedElement elementTag={"h4"} elementContent={"Future Features"} elementContainerClass={"my-4 justify-center"} />
                                    <ul className="ml-4 list-decimal">
                                    { 
                                            
                                        project.future_features.map((c, i) => (
                                            <li key={i}>{c}</li>
                                        ))
                                    }
                                        </ul>

                                
                            </ProjectDetailsCard>

                            
                            
                            {/* Goals  */}
                            <ProjectDetailsCard cardName={"Goals"} cardClass={""} >
                                {
                                    <ul className="ml-4 list-disc">
                                        {
                                        project.goals.map((g, i) => (
                                        <li key={i}>{g}</li>
                                    ))}
                                    </ul>
                                }

                                <TaggedElement elementTag={"h4"} elementContent={"Challenges"} elementContainerClass={"my-4 justify-center"} />
                                    
                                    <ul className="ml-4 list-decimal">
                                        {
                                            project.challenges.map((c, i) => (
                                                <li key={i}>{c}</li>
                                            ))
                                    
                                        }
                                    </ul>

                            </ProjectDetailsCard>
                            
                            {/* Images */}
                            <ProjectDetailsCard cardName={"Images"} cardClass={"col-span-full"} childrenClass={"flex flex-col flex-1 flex-wrap md:flex-row"}>
                                {
                                    project.images.map((img, i) => (
                                        <div className={"w-full md:w-1/2 p-1 h-auto object-cover"}>
                                            <img key={i} src={img} className=" rounded-xl" loading="lazy" ></img>
                                        </div>
                                    ))
                                }
                            </ProjectDetailsCard>                            



                        </div>

                        <TaggedElement elementTag={"button"} elementContent={"Return to Projects"} elementContainerClass={"col-span-full justify-center"} elementLink={"/projects"} />
                        
                    </Section>
                )
        }

    </main>
    )
}

export default ProjectDetails;
