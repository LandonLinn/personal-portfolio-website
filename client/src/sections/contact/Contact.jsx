import Section from "../Section";
import TaggedElement from "../../components/tagged-element/TaggedElement";
import Input from "../../components/form/Input";
import ContactCard from "../../components/contact-info-card/ContactCard";
import WorkCard from "../../components/work-card/WorkCard";

// const SERVICE_ID = import.meta.env.SERVICE_ID;
// console.log(SERVICE_ID);

const Contact = () => {
    return(
        <Section sectionId='contact' sectionClass="col-span-full text-center flex align-center scroll-mt-18">
            <div className="text-center col-span-full flex flex-col items-center">
                <TaggedElement elementTag={"h2"} elementContent={"Contact Me "} elementContainerClass={"justify-center"} />
                <div className="p-2 md:p-8 w-full  lg:h-[80vh] lg:min-w-200 lg:max-w-300 lg:w-[80vw] bg-linear-45 from-accent-black to-neutral-black border-neutral-gray border rounded-2xl flex flex-col gap-2 lg:flex-row lg:gap-8">
                    {/* Text Side */}
                    <div className="h-fit w-full lg:w-1/2 lg:h-fit flex flex-col justify-center text-center">
                        <TaggedElement elementTag={"h3"} elementContent={"Lets Work Together"} elementContainerClass={"justify-center"}/>
                        <div>
                            {/* Contact Info Cards */}
                            <div className="my-4 flex gap-2 flex-wrap">
                                {/* Phone */}
                                <ContactCard 
                                    link="tel:6787723174" 
                                    linkName={"678-772-3174"} 
                                    svg={<svg className="mx-auto" fill="#fff" width="28px" height="28px" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><path d="M 18.1562 37.7617 C 24.9297 44.5352 33.1797 49.7617 39.9062 49.7617 C 42.9297 49.7617 45.5781 48.7070 47.7109 46.3633 C 48.9528 44.9805 49.7266 43.3633 49.7266 41.7695 C 49.7266 40.5977 49.2812 39.4727 48.1562 38.6758 L 40.9843 33.5664 C 39.8828 32.8164 38.9687 32.4414 38.1250 32.4414 C 37.0468 32.4414 36.1093 33.0508 35.0312 34.1055 L 33.3671 35.7461 C 33.1093 36.0039 32.7812 36.1211 32.4765 36.1211 C 32.1015 36.1211 31.7734 35.9805 31.5156 35.8633 C 30.0859 35.0898 27.6015 32.9571 25.2812 30.6602 C 22.9843 28.3633 20.8515 25.8789 20.1015 24.4258 C 19.9609 24.1680 19.8437 23.8398 19.8437 23.4883 C 19.8437 23.1836 19.9375 22.8789 20.1953 22.6211 L 21.8359 20.9102 C 22.8906 19.8320 23.4999 18.8945 23.4999 17.8164 C 23.4999 16.9727 23.1250 16.0586 22.3515 14.9571 L 17.3124 7.8555 C 16.4921 6.7305 15.3437 6.2383 14.0781 6.2383 C 12.5312 6.2383 10.9140 6.9414 9.5546 8.2774 C 7.2812 10.4571 6.2734 13.1524 6.2734 16.1289 C 6.2734 22.8555 11.4062 31.0117 18.1562 37.7617 Z"/></svg>}
                                />
                                
                                {/* Email */}
                                <ContactCard 
                                    link="mailto:LandonLinn1@gmail.com" 
                                    linkName={"LandonLinn1@gmail.com"} 
                                    svg={<svg className="mx-auto" width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.60175 4.20114C2.14997 3.47258 3.02158 3 4 3H20C20.9784 3 21.85 3.47258 22.3982 4.20113L12 11.7635L1.60175 4.20114Z" fill="#fff"/>
                                        <path d="M1 6.2365V18C1 19.6523 2.34772 21 4 21H20C21.6523 21 23 19.6523 23 18V6.23649L13.1763 13.381C12.475 13.891 11.525 13.891 10.8237 13.381L1 6.2365Z" fill="#fff"/>
                                    </svg>}
                                />

                                {/* City */}
                                <ContactCard 
                                    link="https://www.google.com/search?q=Alpharetta%2C+GA&sca_esv=5b6dfac1f9c325dc&sxsrf=ANbL-n5kDLssGeAHIHegmrfKqcJQGqBpPg%3A1770836068323&ei=ZNCMaeesE9G9p84P2Iv54AU&biw=2133&bih=1012&ved=0ahUKEwjn7rq2jtKSAxXR3skDHdhFHlwQ4dUDCBM&uact=5&oq=Alpharetta%2C+GA&gs_lp=Egxnd3Mtd2l6LXNlcnAiDkFscGhhcmV0dGEsIEdBMgoQIxiABBgnGIoFMgQQIxgnMg0QLhiABBixAxgUGIcCMgoQABiABBhDGIoFMgUQABiABDIKEAAYgAQYFBiHAjIKEAAYgAQYQxiKBTIFEAAYgAQyChAAGIAEGEMYigUyChAAGIAEGEMYigUyHBAuGIAEGLEDGBQYhwIYlwUY3AQY3gQY4ATYAQFI6xBQAFiTDnAAeAGQAQCYAZ4BoAHdC6oBBDMuMTG4AQPIAQD4AQGYAg6gAqgMwgIKEC4YgAQYQxiKBcICExAuGIAEGEMYxwEYigUYjgUYrwHCAgoQLhiABBgnGIoFwgINEC4YgAQYsQMYQxiKBcICDhAuGIAEGMcBGI4FGK8BwgIKEC4YgAQYFBiHAsICERAuGIAEGLEDGMcBGI4FGK8BwgIUEC4YgAQYsQMYgwEYxwEYjgUYrwHCAgsQABiABBixAxiDAZgDALoGBggBEAEYFJIHBDIuMTKgB6XDArIHBDIuMTK4B6gMwgcEMi0xNMgHPoAIAA&sclient=gws-wiz-serp" 
                                    target={"_blank"}
                                    rel={"noreferrer noopener"}
                                    linkName={"Alpharetta, GA"} 
                                    svg={<svg className="mx-auto" width="24px" height="24px" viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                            <g id="Page-1" stroke="none" stroke-width="1" fill="#fff">
                                                <g id="Dribbble-Light-Preview" transform="translate(-223.000000, -5399.000000)" fill="#fff">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path d="M174,5248.219 C172.895,5248.219 172,5247.324 172,5246.219 C172,5245.114 172.895,5244.219 174,5244.219 C175.105,5244.219 176,5245.114 176,5246.219 C176,5247.324 175.105,5248.219 174,5248.219 M174,5239 C170.134,5239 167,5242.134 167,5246 C167,5249.866 174,5259 174,5259 C174,5259 181,5249.866 181,5246 C181,5242.134 177.866,5239 174,5239"></path>
                                                    </g>
                                                </g>
                                            </g>
                                    </svg>}
                                />
                            
                            </div>

                            {/* 4 Contact Cards */}
                            <div>
                                <TaggedElement elementTag={"h4"} elementContent={"Available For"} elementContainerClass={"justify-center"}/>
                                <div className="grid grid-cols-2 grid-rows-2 gap-2 my-4">
                                    <WorkCard imgSrc={"/work-icons/full-time-icon.png"} altText={"Clock"} workType={"Full-Time"}/>
                                    <WorkCard imgSrc={"/work-icons/contract-icon.png"} altText={"Paper and pen"} workType={"Contract"}/>
                                    <WorkCard imgSrc={"/work-icons/project-icon.png"} altText={"Lightbulb"} workType={"Project-Based"}/>
                                    <WorkCard imgSrc={"/work-icons/consult-icon.png"} altText={"Handshake"} workType={"Consulting"}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="w-full lg:w-1/2 h-full rounded-lg p-2 ">
                        <form action="" className="flex flex-col gap-2 w-full h-full">
                            {/* First & Last */}
                            <div className="flex flex-col lg:flex-row gap-2">
                                {/* First */}
                                <Input inputType={"text"} inputId={"first_name"} inputName={"first_name"} inputPlace={"First Name"} isRequired={true} inputClass={""} />

                                {/* Last */}
                                <Input inputType={"text"} inputId={"last_name"} inputName={"last_name"} inputPlace={"Last Name"} isRequired={true} inputClass={""} />

                            </div>
                            
                            {/* Company */}
                            <Input inputType={"text"} inputId={"company"} inputName={"company"} inputPlace={"Company"} isRequired={false} inputClass={""} />

                            {/* Email */}
                            <Input inputType={"email"} inputId={"email"} inputName={"email"} inputPlace={"Email"} isRequired={true} inputClass={""} />

                            {/* Phone Number */}
                            <Input inputType={"tel"} inputId={"phone"} inputName={"phone"} inputPlace={"Phone Number"} isRequired={false} inputClass={""} />

                            {/* Message */}
                            <textarea type="text" id="message" name="message" placeholder="Message" required className="border border-neutral-gray h-full rounded-3xl mb-6 px-8 py-4 w-full focus:border-primary-blue focus:outline-0"/>

                            <TaggedElement elementTag={"submit-button"} elementContainerClass={"justify-center mt-auto"} />

                        </form>

                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Contact;