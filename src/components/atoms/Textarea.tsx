import { useRef } from "react"

interface TextareaProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    placeholder?: string
    id: string
    className?: string
    maxLength?: number
}

const Textarea = ({
    value,
    onChange,
    placeholder,
    id,
    className,
    maxLength
}: TextareaProps) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    const calculateSize = () => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "auto"
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
        }
    }

    return (
        <textarea
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
    )
}
export default Textarea
