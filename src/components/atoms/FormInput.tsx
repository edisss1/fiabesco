interface FormInputProps {
    id: string
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    value: string
    placeholder?: string
}

const FormInput = ({
    id,
    label,
    onChange,
    type,
    value,
    placeholder
}: FormInputProps) => {
    return (
        <div className="flex flex-col gap-2 text-text-primary ">
            <label htmlFor={id}>{label}</label>
            <input
                className=" border-2 user-invalid:border-danger border-text-primary focus:outline-primary p-2 rounded-lg"
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
