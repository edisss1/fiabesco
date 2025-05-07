import React from "react"

interface PopoverProps {
    children: React.ReactNode
    className?: string
    id: string
}

const Popover = ({ children, className, id }: PopoverProps) => {
    return (
        <div id={id} className={`${className} popover`} popover="auto">
            {children}
        </div>
    )
}
export default Popover
