const ProjectFilter = ({ filterClass, filterName, handleFilter }) => {
    return(
        <button 
        onClick={() => handleFilter(filterName)}
            className={`${filterClass} max-h-fit text-neutral-gray py-2 px-8 rounded-full border border-neutral-gray hover:cursor-pointer hover:border-neutral-white hover:text-neutral-white transition-colors duration-300`}
        >
            {filterName}
        </button>
    )
    
}

export default ProjectFilter;