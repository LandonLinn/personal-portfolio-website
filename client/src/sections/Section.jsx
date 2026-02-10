

const Section = ({children, sectionClass, sectionId}) => {
    return(
        <section id={sectionId} className={`
                            ${sectionClass} 
                            grid 
                            grid-cols-2 
                            md:grid-cols-4 
                            lg:grid-cols-6 
                            gap-5 
                            py-5 
                            px-5 
                            md:py-10 
                            md:px-10
                            xl:px-20
                            `}>
            {children}
        </section>
    )
}

export default Section;