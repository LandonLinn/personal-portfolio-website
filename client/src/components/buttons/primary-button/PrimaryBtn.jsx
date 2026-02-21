const PrimaryBtn = ({ btn_text, link_styles, primary_btn_classes, link, downloadFile, navigate, routeID }) => {
    return(
        <a href={link} className={link_styles} download={downloadFile} onClick={() => {navigate(routeID);}}>
            <button 
                className={`${primary_btn_classes} px-4 py-2 text-sm bg-linear-to-tr from-primary-blue to-accent-blue
                h-fit w-fit rounded-full md:px-8 md:py-2 font-bold hover:drop-shadow-sm hover:drop-shadow-accent-blue cursor-pointer`}>
                {btn_text}
            </button>
        </a>
    )
}

export default PrimaryBtn;