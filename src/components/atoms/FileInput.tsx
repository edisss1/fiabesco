interface FileInputProps {
    name: string
    id: string
    label: React.ReactNode
}

const FileInput = ({ label, name, id }: FileInputProps) => {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input className="hidden" type="file" name={name} id={id} />
        </div>
    )
}
export default FileInput
