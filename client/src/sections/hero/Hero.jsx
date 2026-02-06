import Section from "../Section";
import Primary_btn from "../../components/primary_button/Primary_btn";
import SocialLinks from "../../components/social-links/SocialLinks";
import TaggedElement from "../../components/tagged-element/TaggedElement";

// Functions
import { getHours } from "../../utils/date";
import Tag from "../../components/tag/Tag";

const Hero = () => {
    return(
        <Section sectionClass="h-screen pt-40">
          <div className="text-center col-start-1 col-span-2 flex flex-col gap-2 max-w-250 justify-center items-center content-center z-2">
            {/* Greeting */}
            <TaggedElement elementTag="p" elementContent={getHours()} elementClass="text-neutral-gray"/>

            {/* Title */}
            <TaggedElement elementTag="h1" elementContent="I'm Landon Linn"/>

            {/* Occupation */}
            <TaggedElement elementTag="h3" elementContent="Software Developer"/>

            {/* Description */}
            <TaggedElement elementTag="p" elementContent="Crafting clean interfaces and scalable web experiences with a strong focus on usability and performances."/>
            
            {/* Resume Download */}
            <TaggedElement elementTag="button" elementContent="Download Resume" />

            <SocialLinks 
                linkClass="w-8 h-8 md:h-8"
                svgClass="w-8 h-8 md:w-full md:h-8 fill-neutral-gray hover:fill-dark-gray hover:cursor-pointer"
            />

            {/* Site Built With */}
            <TaggedElement elementTag="p" elementContent="Site built with" elementClass="text-neutral-gray" />

          </div>

          {/* Hero Decorations */}
          {/* <div className="absolute h-screen w-screen overflow-hidden"> */}
            {/* Circle background */}
            {/* <div className="w-[923px] h-[923px] bg-dark-gray rounded-full  blur-3xl absolute origin-center top-50 left-115"></div> */}
            {/* Bottom Gradient */}
            {/* <div className="w-screen h-screen bg-linear-0 from-neutral-black to-transparent absolute bottom-0"></div> */}
          {/* </div> */}
        </Section>
    )
}

export default Hero;