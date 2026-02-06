

const Tag = ({ tagType, tagName }) => {
    return(
        <p className="tag text-[1rem] text-dark-gray my-auto">&lt;{tagType==="close" ? "/" : ""}{tagName}&gt;</p>
    )
}

export default Tag;