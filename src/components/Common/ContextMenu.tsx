import { motion } from "framer-motion"
import Button from "./Button"
import PencilIcon from "../../assets/PencilIcon"

interface ContextMenuProps {
    contextMenuRef: React.RefObject<HTMLDivElement | null>
    contextMenuPosition: { x: number; y: number }
    isOwnMessage: boolean
    onEdit?: () => void
    onDelete?: () => void
    onReply?: () => void
}

const ContextMenu = ({
    contextMenuRef,
    contextMenuPosition,
    isOwnMessage,
    onEdit,
    onDelete,
    onReply
}: ContextMenuProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.1, ease: "linear" }}
            ref={contextMenuRef}
            style={{
                top: contextMenuPosition.y,
                left: contextMenuPosition.x
            }}
            className="fixed bg-primary min-w-[150px]  text-text-primary rounded-lg p-2 flex flex-col items-start gap-2"
        >
            {isOwnMessage && (
                <Button onClick={onEdit} className="flex items-center ">
                    <PencilIcon />
                    Edit
                </Button>
            )}
            <Button onClick={onDelete} className="flex items-center">
                Delete
            </Button>
            <Button onClick={onReply} className="flex items-center">
                Reply
            </Button>
        </motion.div>
    )
}
export default ContextMenu
