import Section from "../Section";

// Data
import { skills } from "../../components/skill-card/SkillCard";
import { certifications } from "../../components/certification-card/CertificationCard";

// Components
import ExpertiseCard from "../../components/expertise-card/ExpertiseCard";
import SkillCard from "../../components/skill-card/SkillCard";
import CertificationCard from "../../components/certification-card/CertificationCard";
import TaggedElement from "../../components/tagged-element/TaggedElement";



const Skills = () => {
    return(
        <Section sectionId='skills' sectionClass="w-full col-span-full text-center flex align-center scroll-mt-18">
            <div className="text-center col-span-full flex flex-col">
                <TaggedElement elementTag={"h2"} elementContent={"My Skills"} elementContainerClass={"justify-center"} />
                {/* Expertise & Skill Cards */}
                <div className="flex flex-col gap-2 xl:flex-row">
                    {/* Expertise cards */}
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:grid-rows-[120px_120px_120px_120px] xl:w-1/2 ">
                        {/* Front-End Development */}
                        <ExpertiseCard
                            expertiseClass="row-span-2"
                            expertiseIcon={<svg version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                            viewBox="0 0 512 512"  xml:space="preserve">
                                        <style type="text/css"></style>
                                        <g>
                                            <path className="st0" d="M0,0.002v511.996h512v-18.071V0.002H0z M475.859,475.856H36.141v-364.43h439.718V475.856z"/>
                                            <rect x="78.305" y="167.994" className="st0" width="355.386" height="96.723"/>
                                            <rect x="295.152" y="309.894" className="st0" width="138.538" height="118.968"/>
                                            <rect x="78.305" y="311.694" className="st0" width="162.631" height="18.07"/>
                                            <rect x="78.305" y="408.991" className="st0" width="162.631" height="18.071"/>
                                            <rect x="78.305" y="360.347" className="st0" width="162.631" height="18.071"/>
                                        </g>
                                        </svg>}
                            expertiseName="Front-End Development"
                            expertiseDesc="I design and build responsive, high-performance front-end interfaces using modern frameworks."
                        />

                        {/* Back-End Development */}
                        <ExpertiseCard
                            expertiseClass="row-span-2"
                            expertiseIcon={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.7848 0.449982C13.8239 0.449982 14.7167 1.16546 14.9122 2.15495L14.9991 2.59495C15.3408 4.32442 17.1859 5.35722 18.9016 4.7794L19.3383 4.63233C20.3199 4.30175 21.4054 4.69358 21.9249 5.56605L22.7097 6.88386C23.2293 7.75636 23.0365 8.86366 22.2504 9.52253L21.9008 9.81555C20.5267 10.9672 20.5267 13.0328 21.9008 14.1844L22.2504 14.4774C23.0365 15.1363 23.2293 16.2436 22.7097 17.1161L21.925 18.4339C21.4054 19.3064 20.3199 19.6982 19.3382 19.3676L18.9017 19.2205C17.1859 18.6426 15.3408 19.6754 14.9991 21.405L14.9122 21.845C14.7167 22.8345 13.8239 23.55 12.7848 23.55H11.2152C10.1761 23.55 9.28331 22.8345 9.08781 21.8451L9.00082 21.4048C8.65909 19.6754 6.81395 18.6426 5.09822 19.2205L4.66179 19.3675C3.68016 19.6982 2.59465 19.3063 2.07505 18.4338L1.2903 17.1161C0.770719 16.2436 0.963446 15.1363 1.74956 14.4774L2.09922 14.1844C3.47324 13.0327 3.47324 10.9672 2.09922 9.8156L1.74956 9.52254C0.963446 8.86366 0.77072 7.75638 1.2903 6.8839L2.07508 5.56608C2.59466 4.69359 3.68014 4.30176 4.66176 4.63236L5.09831 4.77939C6.81401 5.35722 8.65909 4.32449 9.00082 2.59506L9.0878 2.15487C9.28331 1.16542 10.176 0.449982 11.2152 0.449982H12.7848ZM12 15.3C13.8225 15.3 15.3 13.8225 15.3 12C15.3 10.1774 13.8225 8.69998 12 8.69998C10.1774 8.69998 8.69997 10.1774 8.69997 12C8.69997 13.8225 10.1774 15.3 12 15.3Z"/>
                            </svg>}
                            expertiseName="Back-End Development"
                            expertiseDesc="I create user-centered UI/UX designs that balance visual clarity with usability."
                        />

                        {/* Cloud Development */}
                        <ExpertiseCard
                            expertiseClass="row-span-2"
                            expertiseIcon={<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.2857 20C19.4416 20 22 17.4717 22 14.3529C22 11.8811 20.393 9.78024 18.1551 9.01498C17.8371 6.19371 15.4159 4 12.4762 4C9.32028 4 6.7619 6.52827 6.7619 9.64706C6.7619 10.3369 6.88706 10.9978 7.11616 11.6089C6.8475 11.5567 6.56983 11.5294 6.28571 11.5294C3.91878 11.5294 2 13.4256 2 15.7647C2 18.1038 3.91878 20 6.28571 20H16.2857Z"/>
                            </svg>}
                            expertiseName="Cloud Development"
                            expertiseDesc="I develop reliable back-end and full-stack solutions that connect front-end experiences to real data"
                        />

                        {/* UI/UX Design */}
                        <ExpertiseCard
                            expertiseClass="row-span-2"
                            expertiseIcon={<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                <title/>
                                <g data-name="Layer 32" id="Layer_32">
                                    <path d="M25.61,14.88,27,13.46a3,3,0,0,0,0-4.24L22.78,5a3.08,3.08,0,0,0-4.24,0L17.12,6.39a1,1,0,0,0,0,1.42l7.07,7.07A.93.93,0,0,0,25.61,14.88Z"/>
                                    <path d="M6,27.18l8.33-1.26a1,1,0,0,0,.56-1.7L7.78,17.15a1,1,0,0,0-1.7.56L4.82,26a1,1,0,0,0,.28.86A1,1,0,0,0,6,27.18Z"/>
                                    <path d="M27,13.46,14.85,25.64a1,1,0,0,1-.56.28L6,27.18A1,1,0,0,1,4.82,26l1.26-8.33a1,1,0,0,1,.28-.56L18.54,5a3.08,3.08,0,0,1,4.24,0L27,9.22A3,3,0,0,1,27,13.46Zm-1.41-2.82L21.36,6.39a1,1,0,0,0-1.41,0L8,18.34,7,25l6.66-1,12-11.94C26.08,11.57,26.17,11.25,25.61,10.64Z"/>
                                </g>
                            </svg>}
                            expertiseName="UI/UX Design/Research"
                            expertiseDesc="I bridge UX research and UI design by transforming research insights into purposeful, user-centered experiences."
                        />
                    </div>
                    <div className="grid gap-2 grid-cols-1 md:grid-cols-2 md:grid-rows-[120px_120px_120px_120px] xl:w-1/2">
                        {skills.map((skill) =>(
                            <SkillCard 
                                key={skill.id}
                                skillIcon={skill.icon}
                                skillName={skill.name}
                                skillYear={skill.yearsOfExperience}
                            />
                        ))}
                    </div>
                </div>

                {/* Certifications */}
                <div className="mt-10">
                    {/* Section Title */}
                    <TaggedElement elementTag={"h3"} elementContent={"Certifications"} elementContainerClass={"justify-center mt-5 mb-2"} />                        
                    {/* Content */}
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-4">
                        {certifications.map((cert)=>(
                            <CertificationCard 
                                key={cert.id}
                                certImg={cert.coverImg}
                                certDate={cert.completionDate}
                                certName={cert.name}
                                certLink={cert.link}
                            />
                        ))}
                    </div>
                </div>
                
            </div>
        </Section>
    )
}

export default Skills;