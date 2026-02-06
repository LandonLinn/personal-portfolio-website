import Section from "../Section";
import Primary_btn from "../../components/primary_button/Primary_btn";
import SocialLinks from "../../components/social-links/SocialLinks";

// Get Date
const hours = new Date().getHours();
let greeting = "";
if(hours < 12){
    greeting = "Good Morning"
} 
else if(hours >= 12 && hours < 17){
    greeting = "Good Afternoon"
} else{
    greeting = "Good Evening"
}

const Hero = () => {
    return(
        <Section sectionClass="h-screen">
          <div className="text-center col-span-full flex flex-col justify-center content-center z-2">
            <p><span className="html-tag left-tag">&lt;p&gt;</span>{greeting}<span className="html-tag left-tag">&lt;/p&gt;</span></p>
            <h1><span className="html-tag left-tag">&lt;h1&gt;</span>I'm Landon Linn<span className="html-tag left-tag">&lt;/h1&gt;</span></h1>
            <h3><span className="html-tag left-tag">&lt;h3&gt;</span>Software Developer<span className="html-tag left-tag">&lt;/h3&gt;</span></h3>
            <p className="w-120 text-center mx-auto">Crafting clean interfaces and scalable web experiences with a strong focus on usability and performances.</p>
            <Primary_btn 
                btn_text="Download Resume"
                primary_btn_classes="mt-5"
            />
            <SocialLinks 
                linkClass="w-8 h-8 md:w-fit md:h-8"
                svgClass="w-8 h-8 md:w-full md:h-8 fill-neutral-gray hover:fill-dark-gray hover:cursor-pointer"
            />
            <p className="text-neutral-gray"><span className="html-tag left-tag">&lt;p&gt;</span>Site built with<span className="html-tag left-tag">&lt;/p&gt;</span></p>
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