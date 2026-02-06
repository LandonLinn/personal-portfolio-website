import Tag from "../tag/Tag";

import Primary_btn from "../primary_button/Primary_btn";

const TaggedElement = ({ elementContent, elementTag, elementClass }) => {
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
    } else {
        text = <Primary_btn btn_text="Download Resume" primary_btn_classes="mt-5"/>;
    }

    return(
        <div className="flex gap-4 md:8">
            <Tag tagType="open" tagName={elementTag} />
                {text}
            <Tag tagType="close" tagName={elementTag} />
        </div>
    )
}

export default TaggedElement;