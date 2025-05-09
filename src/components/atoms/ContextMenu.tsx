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
        <div
            ref={contextMenuRef}
            style={{
                top: contextMenuPosition.y,
                left: contextMenuPosition.x
            }}
            className="fixed bg-primary text-white rounded-lg p-2 flex flex-col gap-2"
        >
            {isOwnMessage && <button>Edit</button>}
            <button>Delete</button>
        </div>
    )
}
export default ContextMenu
