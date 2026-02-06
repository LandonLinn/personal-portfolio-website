import Section from "../Section";

const About = () => {
    return(
        <Section sectionClass="h-auto grid-rows-[auto_auto_auto_auto] lg:grid-rows-[auto_150px_auto_auto] xl:grid-rows-[auto_100px_100px_100px_auto_200px]">
            <div className="text-center col-span-full flex flex-col">
                <h2><span className="html-tag left-tag ">&lt;h2&gt;</span>About Me<span className="html-tag right-tag">&lt;/h2&gt;</span></h2>
            </div>

            {/* Image Wrapper */}
            <div className="h-fit row-start-2 col-span-full md:col-span-3 md:mr-10 lg:col-span-2 lg:mr-0 lg:row-span-3 rounded-4xl bg-linear-45 from-primary-blue to-accent-blue ">
                {/* Image */}
                <img 
                    src="/Personal_Headshot.jpeg" 
                    alt="Headshot of a man, smiling in a suit, and blue tie." 
                    className="h-fit w-screen rounded-3xl translate-x-2 -translate-y-2 sm:translate-x-3 sm:-translate-y-3 lg:translate-x-5 lg:-translate-y-5"
                />
            </div>

            {/* About Content */}
            {/* <div className="col-span-full md:col-start-4 md:row-start-2 md:col-span-full"> */}

                {/* What I do */}
                <div className="row-start-3 col-span-full md:col-start-4 md:row-start-2 md:self-end lg:self-start">
                    <h3>What I Do</h3>
                    <p>
                        I specialize in designing and building modern full-stack web 
                        experiences with a strong focus on usability and visual clarity. 
                        By combining UX strategy, interface design, and full-stack development, 
                        I create products that are both functional and visually refined.
                    </p>
                </div>

                {/* Education */}
                <div className="row-start-4 col-span-full lg:col-start-4 lg:row-start-3">
                    <h3>Education</h3>
                    <h4>Bachelor of Science in Information Science (UX Design Concentration)</h4>
                    <p>University of Tennessee, Knoxville | Graduated May 2025 | GPA: 3.22</p>
                </div>
                {/* Education */}
                <div className="row-start-5 col-span-full lg:col-start-4 lg:row-start-4">
                    <h3>Work Experience</h3>
                    {/* Linnium */}
                    <h4>Linnium - Founder & Consultant | Aug 2024 - Present</h4>
                    <p> 
                        Founded and operated Linnium, providing full-stack development, UX/UI
                        design, and digital consulting services for clients across multiple
                        industries. Led projects end-to-end, including discovery, design systems,
                        front-end and back-end development, and ongoing optimization, while
                        collaborating directly with stakeholders to deliver scalable, user-focused
                        solutions.
                    </p>

                    {/* IBC */}
                    <h4>IBC – Web Developer | May 2024 - Aug 2024 </h4>
                    <p>
                        Worked as a web developer supporting website redesigns, feature updates,
                        and performance improvements. Focused on improving usability, visual
                        consistency, and responsiveness while collaborating with internal teams to
                        modernize existing digital assets.
                    </p>
                {/* </div> */}

            </div>
           
        </Section>
    )
}

export default About;