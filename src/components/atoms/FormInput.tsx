interface FormInputProps {
    id: string
    label?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    value: string
    placeholder?: string
    className?: string
}

const FormInput = ({
    id,
    label,
    onChange,
    type,
    value,
    placeholder,
    className = "border-2 user-invalid:border-danger border-text-primary focus:outline-primary p-2 rounded-lg"
}: FormInputProps) => {
    return (
        <div className="flex w-full  flex-col gap-2 text-text-primary ">
            {label && <label htmlFor={id}>{label}</label>}
            <input
                className={className}
                type={type ?? "text"}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required
            />
        </div>
    )
}
export default FormInput
