const SecondaryBtn = ({ btn_text, link_styles, secondary_btn_classes, link, downloadFile }) => {
    return(
        <a href={link} className={link_styles} download={downloadFile}>
            <button 
                className={`
                        ${secondary_btn_classes} 
                        px-4 
                        py-2 
                        text-sm 
                        h-fit 
                        w-fit
                        border-2
                        border-white
                        rounded-3xl 
                        md:px-8 
                        md:py-2 
                        font-bold 
                        hover:text-accent-blue
                        hover:border-accent-blue
                        hover:cursor-pointer
                    `}
                >
                {btn_text}
            </button>
        </a>
    )
}

export default SecondaryBtn;