import { Link as Anchor } from "react-router-dom"

interface LinkProps {
    children: React.ReactNode
    variantEnabled?: boolean
    variant?: "primary" | "secondary"
    path: string
    className?: string
}

const Link = ({
    children,
    variantEnabled = true,
    variant,
    path,
    className
}: LinkProps) => {
    const variants = {
        primary:
            "bg-primary px-4 py-2 rounded-lg text-white hover:scale-105 transition-transform duration-100 min-w-fit",
        secondary:
            "bg-secondary px-4 py-2 rounded-lg text-white hover:scale-105 transition-transform duration-100 min-w-fit"
    }

    const appliedVariant = variantEnabled ? variants[variant!] : ""

    return (
        <Anchor to={path} className={`${appliedVariant} ${className}`}>
            {children}
        </Anchor>
    )
}

export default Link
