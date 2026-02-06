const Primary_btn = ({ btn_text, link_styles, primary_btn_classes }) => {
    return(
        <a href="/contact" className={link_styles}>
            <button 
                className={`${primary_btn_classes} bg-linear-to-tr from-primary-blue to-accent-blue
                h-fit w-fit rounded-3xl pl-8 pr-8 pt-2 pb-2 font-bold hover:drop-shadow-sm hover:drop-shadow-accent-blue cursor-pointer`}>
                {btn_text}
            </button>
        </a>
    )
}

export default Primary_btn;