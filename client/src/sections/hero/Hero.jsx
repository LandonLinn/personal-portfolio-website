import Section from "../Section";
import SocialLinks from "../../components/social-links/SocialLinks";
import TaggedElement from "../../components/tagged-element/TaggedElement";

// Functions
import { getHours } from "../../utils/date";
import StackIconElem from "../../components/stack-icons/stack-icon-element/StackIconElem";

const Hero = () => {
    return(
        <Section sectionClass="h-screen pt-25!">
          <div className=" text-center col-start-1 col-span-full flex flex-col gap-2 justify-center items-center content-center z-2">
            {/* Greeting */}
            <TaggedElement elementTag="p" elementContent={getHours()} elementClass="text-neutral-gray"/>

            {/* Title */}
            <TaggedElement elementTag="h1" elementContent="I'm Landon Linn"/>

            {/* Occupation */}
            <TaggedElement elementTag="h3" elementContent="Software Developer"/>

            {/* Description */}
            <TaggedElement elementTag="p" elementContent="Crafting clean interfaces and scalable web experiences with a strong focus on usability and performances." elementClass={" max-w-125"}/>
            
            {/* Resume Download & Portfolio Buttons */}
            <TaggedElement elementTag="hero-button" elementContent="Download Resume" />

            <SocialLinks 
                linkClass="w-8 h-8 md:h-8"
                svgClass="w-8 h-8 md:w-full md:h-8 fill-neutral-gray hover:fill-dark-gray hover:cursor-pointer"
            />

            {/* Site Built With */}
            <TaggedElement elementTag="p" elementContent="Site built with" elementClass="text-neutral-gray" />
            <StackIconElem />

          </div>

          {/* Hero Decorations */}
          <div className="absolute inset-0 h-screen w-full overflow-hidden pointer-events-none opacity-30">
            {/* Circle background */}
            <div className="
                  absolute
                  top-2/3
                  left-1/2
                  -translate-x-1/2 
                  -translate-y-1/2
                  aspect-square
                  w-[70vw]
                  max-w-225
                  min-w-[320px]
                  bg-dark-gray 
                  rounded-full  
                  blur-3xl
                "
              />
            {/* Bottom Gradient */}
            <div className="
                  absolute
                  inset-x-0
                  bottom-0 
                  h-[80vh]
                  bg-linear-0 from-neutral-black to-transparent
                "
            />
          </div>
        </Section>
    )
}

export default Hero;