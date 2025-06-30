interface FileInputProps {
    name: string
    label: React.ReactNode
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    accept?: string
    onClick?: () => void
    className?: string
}

const FileInput = ({
    label,
    name,
    onChange,
    accept,
    onClick,
    className
}: FileInputProps) => {
    return (
        <>
            <label className={`cursor-pointer ${className}`}>
                {label}
                <input
                    onClick={onClick}
                    className="hidden "
                    type="file"
                    onChange={onChange}
                    name={name}
                    accept={accept}
                />
            </label>
        </>
    )
}
export default FileInput
