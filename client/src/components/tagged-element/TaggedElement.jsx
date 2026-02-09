import Tag from "../tag/Tag";

import PrimaryBtn from "../buttons/primary_button/PrimaryBtn";
import SecondaryBtn from "../buttons/secondary-button/SecondaryBtn";

const TaggedElement = ({ elementContent, elementTag, elementClass, elementContainerClass, elementHidden }) => {
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
    else{
        text = <div className="flex gap-2 ">
            <PrimaryBtn btn_text="Download Resume" primary_btn_classes="my-2"/>
            <SecondaryBtn btn_text="View Projects" secondary_btn_classes="my-2"/>
        </div>
    }

    return(
        <div className={`${elementContainerClass} flex gap-4`}>
            <Tag tagType="open" tagName={elementTag} />
                {text}
            <Tag tagType="close" tagName={elementTag} tagHidden={elementHidden} />
        </div>
    )
}

export default TaggedElement;