interface PageHeaderProps {
    header: string | undefined
}

const PageHeader = ({ header }: PageHeaderProps) => {
    return <h1 className=" text-xl font-bold ">{header}</h1>
}
export default PageHeader
