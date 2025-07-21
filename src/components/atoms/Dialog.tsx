import { useEffect } from "react"
import Button from "./Button"
import CrossIcon from "../../assets/CrossIcon"

interface DialogProps {
    children: React.ReactNode
    dialogRef: React.RefObject<HTMLDialogElement | null>
    header?: string
}

const Dialog = ({ dialogRef, children, header }: DialogProps) => {
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
            open={dialogRef.current?.open}
            ref={dialogRef}
            className={` bg-background dark:bg-background-dark py-4 px-4 gap-2 w-full max-w-[400px] min-h-[200px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg backdrop:bg-text-primary/60 backdrop:backdrop-blur-sm backdrop:pointer-events-none`}
        >
            <div className="relative mb-2 flex items-center justify-between">
                {header && <h1 className="text-lg font-medium">{header}</h1>}
                <Button
                    onClick={() => dialogRef.current?.close()}
                    className="cursor-pointer self-end p-1 hover:bg-secondary rounded-full transition-colors duration-200"
                >
                    <CrossIcon className="dark:[&>*]:fill-text-primary-dark" />
                </Button>
            </div>
            {children}
        </dialog>
    )
}
export default Dialog
