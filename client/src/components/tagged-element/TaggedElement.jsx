import Tag from "../tag/Tag";

import PrimaryBtn from "../buttons/primary_button/PrimaryBtn";
import SecondaryBtn from "../buttons/secondary-button/SecondaryBtn";

const TaggedElement = ({ elementContent, elementTag, elementClass, elementContainerClass, elementHidden, elementLink }) => {
    let text;

    if(elementTag === "h1"){
       text = <h1 className={elementClass}>{elementContent}</h1>;
    }
    else if(elementTag === "h2"){
        text = <h2 className={elementClass}>{elementContent}</h2>;
    }
    else if(elementTag === "h3"){
        text = <h3 className={elementClass}>{elementContent}</h3>;
    }
    else if(elementTag === "h4"){
        text = <h4 className={elementClass}>{elementContent}</h4>;
    }
    else if(elementTag === "p"){
        text = <p className={elementClass}>{elementContent}</p>;
    } 
    else if(elementTag==="button"){
        text = <PrimaryBtn btn_text={elementContent} primary_btn_classes="my-2" link={elementLink}/>
    }
    else if(elementTag==="submit-button"){
        text = <input type="submit"  className="px-4 py-2 text-sm bg-linear-to-tr from-primary-blue to-accent-blue
                h-fit w-fit rounded-full md:px-8 md:py-2 font-bold hover:drop-shadow-sm hover:drop-shadow-accent-blue cursor-pointer"/>
    }
    else{
        text = <div className="flex gap-2 items-center ">
            <PrimaryBtn btn_text="Download Resume" primary_btn_classes="my-2" link={"/resume/LandonLinn_Resume.pdf"} downloadFile={"LandonLinn_Resume"}/>
            <SecondaryBtn btn_text="View Projects" secondary_btn_classes="my-2" link={"/projects"}/>
        </div>
    }

    return(
        <div className={`${elementContainerClass} flex gap-4`}>
            <Tag tagType="open" tagName={elementTag}/>
                {text}
            <Tag tagType="close" tagName={elementTag} tagHidden={elementHidden} />
        </div>
    )
}

export default TaggedElement;