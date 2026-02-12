const ContactCard = ({ svg, rel, target, link, linkName }) => {
    return(
        <a href={link} rel={rel} target={target} className="flex flex-1 border w-fit bg-linear-45 from-accent-black to-neutral-black bg-dark-gray border-neutral-gray rounded-lg items-center hover:border-primary-blue">
                <div className="h-14 min-w-14 rounded-tl-lg rounded-bl-lg bg-linear-45 from-primary-blue to-accent-blue content-center">
                    {svg}
                </div>
                <p className="text-sm! px-4 font-semibold">{linkName}</p>
        </a>
    )
}

export default ContactCard;