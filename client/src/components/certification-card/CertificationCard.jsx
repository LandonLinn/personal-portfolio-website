export const certifications = [
    {
        id: 0,
        name: "IBM Full Stack Software Developer Professional Certificate",
        coverImg: "/cert-imgs/IBM_FullStack_Cert.png",
        completionDate: "October 06, 2025",
        link: "https://www.credly.com/badges/60853251-53cc-4f6a-9f2b-07a00d855cdf/linked_in_profile",
    },
    {
        id: 1,
        name: "AWS Certified Cloud Practitioner",
        coverImg: "/cert-imgs/AWS_cloudpract_cert.png",
        completionDate: "September 02, 2025",
        link: "https://www.credly.com/badges/25b2072b-b566-45cf-8093-9e8ec534b5b2/linked_in_profile",
    },
    {
        id: 2,
        name: "Meta Front-End Developer Specialization",
        coverImg: "/cert-imgs/Meta_frontend_cert.png",
        completionDate: "January 11, 2025",
        link: "https://coursera.org/share/9d3d8f5d6e2c42e02304c567eb69d51c",
    },
    {
        id: 3,
        name: "Google UX Design Specialization",
        coverImg: "/cert-imgs/google_uxdesign_cert.png",
        completionDate: "September 24, 2024",
        link: "https://coursera.org/share/7a6a45e511c8a3bbd665c320d5136d17",
    },
];

const CertificationCard = ({ certImg, certName, certDate, certLink }) => {
    return(
        <>
            <div className="p-2 text-left bg-linear-45 from-accent-black to-neutral-black border border-neutral-gray h-80 rounded-2xl flex flex-col">
                {/* Image Wrapper */}
                <div className="h-[55%] w-full rounded-xl bg-white overflow-hidden flex items-center justify-center">
                    <img
                    src={certImg}
                    alt={`${certName} Cover Image`}
                    className="object-contain h-full w-full"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-2">
                    <p className="text-neutral-gray text-sm">{certDate}</p>
                    <p className="font-semibold">{certName}</p>
                    <a
                    className="flex items-center gap-2 transition-all duration-300 hover:gap-3 mt-auto"
                    href={certLink}
                    rel="nopener noreferrer"
                    target="_blank"
                    >
                        <p>View Certificate</p>
                        <p>&rarr;</p>       
                    </a>
                </div>
                </div>

        </>
    )
}

export default CertificationCard;