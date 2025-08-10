interface ProjectsListCardProps {
    img: File | string
    title: string
    link: string
}

const ProjectsListCard = ({ img, title, link }: ProjectsListCardProps) => {
    const imgURL = URL.createObjectURL(img as File)

    return (
        <a href={link} target="_blank" className="w-[140px]">
            <img
                className="w-full bg-secondary object-cover rounded-lg aspect-square"
                src={imgURL}
                alt={title}
            />
            <h3 className="text-lg mt-2">{title}</h3>
        </a>
    )
}
export default ProjectsListCard
