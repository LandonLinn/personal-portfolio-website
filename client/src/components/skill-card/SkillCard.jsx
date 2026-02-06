import { getYear } from "../../utils/date";
const year = getYear();

export const skills = [{
    id: 0,
    name: "HTML",
    icon: "/skill-icons/HTML.png",
    yearsOfExperience: year - 2024,
},
{
    id: 1,
    name: "CSS",
    icon: "/skill-icons/css.png",
    yearsOfExperience: year - 2024,
},
{
    id: 2,
    name: "JavaScript",
    icon: "/skill-icons/JavaScript.png",
    yearsOfExperience: year - 2024,
},
{
    id: 3,
    name: "Node.js",
    icon: "/skill-icons/node.png",
    yearsOfExperience: year - 2024,
},
{
    id: 4,
    name: "Express",
    icon: "/skill-icons/express.png",
    yearsOfExperience: year - 2024,
},
{
    id: 5,
    name: "MongoDB",
    icon: "/skill-icons/mongo.png",
    yearsOfExperience: year - 2024,
},
{
    id: 6,
    name: "Figma",
    icon: "/skill-icons/figma.png",
    yearsOfExperience: year - 2024,
},
{
    id: 7,
    name: "Adobe Creative Cloud",
    icon: "/skill-icons/adobe.png",
    yearsOfExperience: year - 2024,
},
];

const SkillCard = ({skillName, skillIcon, skillYear}) => {
    return(
        <div className="border-neutral-gray border rounded-2xl text-left p-5 flex content-center justify-center">
            {/* Icon & Name */}
            <div className="flex self-center gap-4">
                <img className="my-auto h-10" src={skillIcon} alt={`${skillName} Icon`} />
                <p className="my-auto"><strong>{skillName}</strong></p>
            </div>
            <p className="ml-auto text-right text-neutral-gray self-center">{skillYear} Years of Experience</p>
        </div>
    )
}

export default SkillCard;