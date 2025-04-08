interface FormProps {
    children: React.ReactNode
    className: string
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
}

const Form = ({ children, className, onSubmit }: FormProps) => {
    return (
        <form onSubmit={onSubmit} className={`${className} px-4`}>
            {children}
        </form>
    )
}
export default Form
