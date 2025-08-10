import { motion } from "framer-motion"

interface FormProps {
    children: React.ReactNode
    className: string
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
    x?: number
    useMotion?: boolean
}

const Form = ({ children, className, onSubmit, x, useMotion }: FormProps) => {
    const FormEl = useMotion ? motion.form : "form"

    return (
        <FormEl
            initial={useMotion ? { opacity: 0, x } : {}}
            animate={useMotion ? { opacity: 1, x } : {}}
            transition={useMotion ? { duration: 0.5, ease: "backInOut" } : {}}
            onSubmit={onSubmit}
            className={`${className} px-4`}
        >
            {children}
        </FormEl>
    )
}
export default Form
