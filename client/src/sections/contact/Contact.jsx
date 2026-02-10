import Section from "../Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";

const Contact = () => {
    return(
        <Section sectionId='contact' sectionClass="h-screen col-span-full text-center flex align-center scroll-mt-25">
            <div className="text-center col-span-full flex flex-col">
                <TaggedElement elementTag={"h2"} elementContent={"Contact"} elementContainerClass={"justify-center"} />
            </div>
        </Section>
    )
}

export default Contact;