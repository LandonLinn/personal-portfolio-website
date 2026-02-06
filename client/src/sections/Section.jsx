

const Section = ({children, sectionClass}) => {
    return(
        <section className={`${sectionClass} grid grid-cols-6 gap-5 py-5 px-5 md:py-10 md:px-20`}>
            {children}
        </section>
    )
}

export default Section;