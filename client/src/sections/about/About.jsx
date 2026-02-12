import Section from "../Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";
import Tag from "../../components/tag/Tag";

const About = () => {
    return(
        <Section sectionId='about' sectionClass="scroll-mt-18">
            <div className="col-span-full flex flex-col">
                <TaggedElement elementTag="h2" elementContent="About Me" elementContainerClass="justify-center"/>
            </div>

            <div className="col-span-full grid gap-x-5 gap-y-2 md:grid-cols-2 md:grid-rows-[auto_auto] lg:grid-rows-[auto_auto_auto]">
                {/* Image Wrapper */}
                <div className="h-fit rounded-4xl row-start-1 row-span-full mx-auto">
                    {/* Image */}
                    <img 
                        src="/Personal_Headshot.jpeg" 
                        alt="Headshot of a man, smiling in a suit, and blue tie." 
                        className="rounded-3xl max-h-154"
                    />                
                </div>

                {/* What I do */}
                <div className="">
                    <TaggedElement elementTag={"h3"} elementContent={"What I Do"}/>
                    <TaggedElement elementHidden={"true"} elementTag={"p"} elementContent={`I specialize in designing and building modern full-stack web 
                        experiences with a strong focus on usability and visual clarity. 
                        By combining UX strategy, interface design, and full-stack development, 
                        I create products that are both functional and visually refined.`}
                        />
                </div>
                
                {/* Education */}
                <div className="md:col-start-1 lg:col-start-2">
                    <TaggedElement elementTag={"h3"} elementContent={"Education"} />
                    <TaggedElement elementHidden={"true"} elementTag={"h4"} elementContent={"Bachelor of Science in Information Science (UX Design Concentration)"} />
                    <TaggedElement elementHidden={"true"} elementTag={"p"} elementContent={"University of Tennessee, Knoxville | Graduated May 2025 | GPA: 3.22"}/>
                </div>

                <div className=" lg:col-start-1 lg:col-span-full xl:col-start-2">
                    <TaggedElement elementTag={"h3"} elementContent={"Work Experience"} />
                    {/* Linnium */}
                    <TaggedElement elementHidden={"true"} elementTag={"h4"} elementContent={"Linnium - Founder & Consultant | Aug 2024 - Present"}/>
                    <TaggedElement elementHidden={"true"} elementTag={"p"} elementContent={`Founded Linnium, delivering full-stack development, UX/UI design, and digital 
                        consulting. Led end-to-end projects from discovery through 
                        development, collaborating with stakeholders to build scalable, 
                        user-focused solutions.`}/>

                    {/* IBC */}
                    <TaggedElement elementHidden={"true"} elementTag={"h4"} elementClass={"mt-2"} elementContent={"IBC – Web Developer | May 2024 - Aug 2024"} />
                    <TaggedElement elementHidden={"true"} elementTag={"p"} elementContent={`Worked as a web developer supporting website redesigns, feature updates,
                        and performance improvements. Focused on improving usability, visual
                        consistency, and responsiveness while collaborating with internal teams to
                        modernize existing digital assets.`} />
                </div>
            </div>           
        </Section>
    )
}

export default About;