import Section from "../../sections/Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";

const Error = () => {
    return(
        <Section sectionClass={"h-screen"}>
            <div className="col-span-full flex flex-col content-center justify-center">
                <TaggedElement elementTag={"h1"} elementContent={"404"} elementContainerClass={"mx-auto"}/>
                <TaggedElement elementTag={"p"} elementContent={"Nothing creative to see here!"} elementContainerClass={"mx-auto"}/>
                <TaggedElement elementTag={"button"} elementContent={"Return Home"} elementLink={"/"} elementContainerClass={"mx-auto my-2"} />
            </div>            
        </Section>
    )
}

export default Error;