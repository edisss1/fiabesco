interface ButtonProps {
  onClick?: () => void
  children: React.ReactNode
  type?: "submit" | "reset" | "button"
  variantEnabled?: boolean
  variant?: "primary" | "secondary"
  className?: string
}

const Button = ({ onClick, children, type = "button", variantEnabled = true, variant, className }: ButtonProps) => {

  const variants = {
    primary: "bg-primary px-4 py-2 rounded-lg",
    secondary: "bg-secondary px-4 py-2 rounded-lg"
  }

  const appliedVariant = variantEnabled ? variants[variant!] : ""

  return (
    <button className={appliedVariant || className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
