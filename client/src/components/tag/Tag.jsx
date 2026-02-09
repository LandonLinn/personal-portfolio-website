

const Tag = ({ tagType, tagName, tagHidden }) => {
    return(
        <p className={`${tagHidden === 'true' ? "hidden" : ""} text-[1rem] text-dark-gray my-auto max-sm:hidden`} aria-hidden="true">&lt;{tagType==="close" ? "/" : ""}{tagName}&gt;</p>
    )
}

export default Tag;