import { motion } from "framer-motion"

interface FormProps {
    children: React.ReactNode
    className: string
    onSubmit: (e: React.ChangeEvent<HTMLFormElement>) => void
    x?: number
}

const Form = ({ children, className, onSubmit, x }: FormProps) => {
    return (
        <motion.form
            initial={{ opacity: 0, x }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "backInOut" }}
            onSubmit={onSubmit}
            className={`${className} px-4`}
        >
            {children}
        </motion.form>
    )
}
export default Form
