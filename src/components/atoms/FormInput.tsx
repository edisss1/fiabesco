interface FormInputProps {
    id: string
    label?: React.ReactNode
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    type?: string
    value: string
    placeholder?: string
    className?: string
    flexDirection?: "flex-col" | "flex-row"
    alignItems?: "items-center" | ""
    textColor?: string
}

const FormInput = ({
    id,
    label,
    onChange,
    type,
    value,
    placeholder,
    className = "border-2 user-invalid:border-danger border-text-primary focus:outline-primary p-2 rounded-lg",
    flexDirection = "flex-col",
    alignItems = "",
    textColor
}: FormInputProps) => {
    return (
        <div
            className={`flex w-full ${flexDirection && flexDirection} ${
                alignItems && alignItems
            }  gap-2 text-text-primary `}
        >
            {label && (
                <label style={{ color: textColor && textColor }} htmlFor={id}>
                    {label}
                </label>
            )}
            <input
                style={{
                    color: textColor && textColor,
                    borderColor: textColor && textColor
                }}
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
