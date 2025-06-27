import { useRef } from "react"

interface TextareaProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    id: string
    className?: string
    maxLength?: number
    label?: string
    textColor?: string
}

const Textarea = ({
    value,
    onChange,
    placeholder,
    id,
    className,
    maxLength,
    label,
    textColor
}: TextareaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const calculateSize = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto"
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
        }
    }

    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label style={{ color: textColor && textColor }} htmlFor={id}>
                    {label}
                </label>
            )}
            <textarea
                style={{
                    color: textColor && textColor,
                    borderColor: textColor && textColor
                }}
                ref={textAreaRef}
                maxLength={maxLength}
                className={className}
                value={value}
                onChange={(e) => {
                    onChange(e)
                    calculateSize()
                }}
                placeholder={placeholder}
                id={id}
            ></textarea>
        </div>
    )
}
export default Textarea
