const SecondaryBtn = ({ btn_text, link_styles, secondary_btn_classes, link, downloadFile }) => {
    return(
        <a href={link} className={link_styles} download={downloadFile}>
            <button 
                className={`
                        ${secondary_btn_classes} 
                        secondary-btn
                        px-4 
                        py-2 
                        text-sm 
                        h-fit 
                        w-fit
                        border
                        border-white
                        rounded-full 
                        md:px-8 
                        md:py-2 
                        font-bold 
                        transition-all
                        duration-300
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