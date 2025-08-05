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
    style?: React.CSSProperties
    disabled?: boolean
}

const Button = ({
    onClick,
    children,
    type = "button",
    variantEnabled = true,
    variant,
    className,
    popoverTarget,
    popoverTargetAction,
    ariaLabel,
    ariaExpanded,
    ariaControls,
    style,
    disabled
}: ButtonProps) => {
    const variants = {
        primary:
            "bg-primary px-4 py-2 rounded-lg cursor-pointer text-text-primary",
        secondary:
            "bg-secondary px-4 py-2 rounded-lg text-text-primary cursor-pointer"
    }

    const appliedVariant = variantEnabled ? variants[variant!] : ""

    return (
        <button
            style={style}
            aria-expanded={ariaExpanded}
            aria-label={ariaLabel}
            aria-controls={ariaControls}
            popoverTarget={popoverTarget}
            popoverTargetAction={popoverTargetAction}
            className={appliedVariant || className}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button
