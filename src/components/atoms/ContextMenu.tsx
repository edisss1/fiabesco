import { motion } from "framer-motion"

interface ContextMenuProps {
    contextMenuRef: React.RefObject<HTMLDivElement | null>
    contextMenuPosition: { x: number; y: number }
    isOwnMessage: boolean
}

const ContextMenu = ({
    contextMenuRef,
    contextMenuPosition,
    isOwnMessage
}: ContextMenuProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            transition={{ duration: 0.1, ease: "linear" }}
            ref={contextMenuRef}
            style={{
                top: contextMenuPosition.y,
                left: contextMenuPosition.x,
                transformOrigin: "top left"
            }}
            className="fixed bg-primary  text-white rounded-lg p-2 flex flex-col gap-2"
        >
            {isOwnMessage && <button>Edit</button>}
            <button>Delete</button>
        </motion.div>
    )
}
export default ContextMenu
