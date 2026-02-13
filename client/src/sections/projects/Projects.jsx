import Section from "../Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";
import PrimaryBtn from "../../components/buttons/primary_button/PrimaryBtn";

const Projects = () => {
    return(
        <Section sectionClass="h-screen col-span-full text-center flex align-center scroll-mt-25">
            <div className="text-center col-span-full flex flex-col">
                <TaggedElement elementTag={"h2"} elementContent={"Featured Projects"} elementContainerClass={"justify-center"}/>

                {/* Projects Shown (4 best) */}
                


                {/* View all button */}
                <TaggedElement elementTag={"button"} elementContent={"View All"} elementLink={"/projects"} elementContainerClass={"justify-center mt-auto"} />
            </div>
        </Section>
    )
}

export default Projects;