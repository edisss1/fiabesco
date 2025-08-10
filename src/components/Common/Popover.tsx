import { useEffect, useRef, useState } from "react"
import MoreIcon from "../../assets/MoreIcon"

interface PopoverProps {
    children: React.ReactNode
    className?: string
    id: string
}

const Popover = ({ children }: PopoverProps) => {
    const [isVisible, setIsVisible] = useState(false)
    const popoverRef = useRef<HTMLDivElement | null>(null)
    const triggerRef = useRef<HTMLButtonElement | null>(null)

    const toggleVisibility = () => setIsVisible(!isVisible)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                popoverRef.current &&
                !popoverRef.current.contains(e.target as Node) &&
                !triggerRef.current?.contains(e.target as Node)
            ) {
                setIsVisible(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="relative inline-block ">
            <button
                ref={triggerRef}
                onClick={toggleVisibility}
                className="border-0 p-2.5 cursor-pointer rounded rotate-90"
                aria-haspopup="true"
                aria-expanded={isVisible}
                aria-controls="popover-content"
            >
                <MoreIcon />
            </button>
            {isVisible && (
                <div
                    id="popover-content"
                    ref={popoverRef}
                    className="absolute top-0 left-0 -translate-x-full mt-2.5   bg-primary rounded p-4 z-[1000] whitespace-nowrap"
                    role="dialog"
                    aria-modal="true"
                >
                    {children}
                </div>
            )}
        </div>
    )
}
export default Popover
