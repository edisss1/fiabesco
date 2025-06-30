import { useEffect } from "react"
import Button from "./Button"
import CrossIcon from "../../assets/CrossIcon"

interface DialogProps {
    children: React.ReactNode
    dialogRef: React.RefObject<HTMLDialogElement | null>
}

const Dialog = ({ dialogRef, children }: DialogProps) => {
    const handleClickOutside = (e: MouseEvent) => {
        if (
            dialogRef.current &&
            !dialogRef.current.contains(e.target as Node)
        ) {
            dialogRef.current.close()
        }
    }

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside)
        return () => {
            window.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <dialog
            className={` ${
                dialogRef.current?.open ? "flex flex-col" : ""
            } bg-background py-4 px-4 gap-2 w-full max-w-[400px] min-h-[200px]  backdrop:bg-text-primary/30 backdrop:pointer-events-none fixed top-1/2 left-1/2 -translate-1/2 rounded-lg`}
            ref={dialogRef}
        >
            <Button
                onClick={() => dialogRef.current?.close()}
                className="cursor-pointer self-end-safe p-1 hover:bg-secondary rounded-full transition-colors duration-200"
            >
                <CrossIcon />
            </Button>
            {children}
        </dialog>
    )
}
export default Dialog
