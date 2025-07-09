import { useEffect, useState } from "react"
import Button from "./Button"
import CrossIcon from "../../assets/CrossIcon"

interface DialogProps {
    children: React.ReactNode
    dialogRef: React.RefObject<HTMLDialogElement | null>
}

const Dialog = ({ dialogRef, children }: DialogProps) => {
    const [open, setOpen] = useState(dialogRef.current?.open)

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

    useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog) return

        const onOpen = () => setOpen(true)
        const onClose = () => setOpen(false)

        dialog.addEventListener("open", onOpen)
        dialog.addEventListener("close", onClose)

        console.log(open)

        return () => {
            dialog.removeEventListener("open", onOpen)
            dialog.removeEventListener("close", onClose)
        }
    }, [dialogRef])

    return (
        <dialog
            className={` ${
                dialogRef.current?.open ? "flex flex-col" : ""
            } bg-background dark:bg-background-dark py-4 px-4 gap-2 w-full max-w-[400px] min-h-[200px] backdrop:bg-text-primary/60   backdrop:backdrop-blur-sm
              backdrop:pointer-events-none fixed top-1/2 left-1/2 -translate-1/2 rounded-lg`}
            ref={dialogRef}
        >
            <Button
                onClick={() => dialogRef.current?.close()}
                className="cursor-pointer self-end-safe p-1 hover:bg-secondary rounded-full transition-colors duration-200"
            >
                <CrossIcon className="dark:[&>*]:fill-text-primary-dark" />
            </Button>
            {children}
        </dialog>
    )
}
export default Dialog
