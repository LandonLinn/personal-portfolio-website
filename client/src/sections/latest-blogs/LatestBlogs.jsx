import Section from "../Section";

const LatestBlogs = () => {
    return(
        <Section sectionClass="h-screen col-span-full text-center flex align-center scroll-mt-25">
            <div className="text-center col-span-full flex flex-col">
                <h2><span className="html-tag left-tag">&lt;h2&gt;</span>Latest Blogs<span className="html-tag right-tag">&lt;/h2&gt;</span></h2>
            </div>
        </Section>
    )
}

export default LatestBlogs;