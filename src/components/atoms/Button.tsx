interface ButtonProps {
    onClick?: () => void
    children: React.ReactNode
    type?: "submit" | "reset" | "button"
    variantEnabled?: boolean
    variant?: "primary" | "secondary"
    className?: string
    popoverTarget?: string
    popoverTargetAction?: "show" | "hide" | "toggle"
    ariaLabel?: string
    ariaExpanded?: boolean
    ariaControls?: string
}

const Button = ({
    onClick,
    children,
    type = "button",
    variantEnabled = true,
    variant,
    className,
    popoverTarget,
    popoverTargetAction = "toggle",
    ariaLabel,
    ariaExpanded,
    ariaControls
}: ButtonProps) => {
    const variants = {
        primary: "bg-primary px-4 py-2 rounded-lg cursor-pointer",
        secondary:
            "bg-secondary px-4 py-2 rounded-lg text-text-primary cursor-pointer"
    }

    const appliedVariant = variantEnabled ? variants[variant!] : ""

    return (
        <button
            aria-expanded={ariaExpanded}
            aria-label={ariaLabel}
            aria-controls={ariaControls}
            popoverTarget={popoverTarget}
            popoverTargetAction={popoverTargetAction}
            className={appliedVariant || className}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
