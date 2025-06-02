import { useDispatch, useSelector } from "react-redux"
import { MessageType } from "../../types/Message"
import { AppDispatch, RootState } from "../../redux/store"
import { formatDate } from "../../utils/formatTime"
import { useEffect, useRef, useState } from "react"

import { AnimatePresence } from "framer-motion"
import ContextMenu from "./ContextMenu"
import {
    setEditing,
    setMessageID,
    setMessageToEdit
} from "../../redux/slices/messagesSlice"
import { deleteMessage } from "../../utils/deleteMessage"
import { useMutation, useQueryClient } from "@tanstack/react-query"
interface MessageProps {
    message: MessageType
    onShowContextMenu?: () => void
    openedContextMenu?: boolean
    setOpenedContextMenu: React.Dispatch<React.SetStateAction<string>>
}

const Message = ({
    message,
    onShowContextMenu,
    openedContextMenu,
    setOpenedContextMenu
}: MessageProps) => {
    const dispatch = useDispatch<AppDispatch>()
    const { user: currentUser } = useSelector((state: RootState) => state.auth)
    const messageRef = useRef<HTMLDivElement | null>(null)
    const contextMenuRef = useRef<HTMLDivElement | null>(null)
    const [contextMenuPosition, setContextMenuPosition] = useState({
        x: 0,
        y: 0
    })
    const client = useQueryClient()

    const isOwnMessage = message.senderID === currentUser?._id

    const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setContextMenuPosition({ x: e.clientX, y: e.clientY })
        onShowContextMenu?.()
    }

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                contextMenuRef.current &&
                !contextMenuRef.current.contains(e.target as Node)
            ) {
                setOpenedContextMenu("")
            }
        }
        document.addEventListener("click", handleClickOutside)
        return () => {
            document.removeEventListener("click", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if (openedContextMenu && contextMenuRef.current) {
            const rect = contextMenuRef.current.getBoundingClientRect()
            let newX = contextMenuPosition.x
            let newY = contextMenuPosition.y

            if (rect.right > window.innerWidth) {
                newX = window.innerWidth - rect.width - 10
            }
            if (rect.bottom > window.innerHeight) {
                newY = window.innerHeight - rect.height - 10
            }

            if (
                newX !== contextMenuPosition.x ||
                newY !== contextMenuPosition.y
            ) {
                setContextMenuPosition({ x: newX, y: newY })
            }
        }
    }, [openedContextMenu])

    const handleStartEditing = () => {
        dispatch(setEditing(true))
        dispatch(setMessageToEdit(message.content))
        dispatch(setMessageID(message._id))
        setOpenedContextMenu("")
    }

    const { mutate: deleteMsg } = useMutation({
        mutationKey: ["delete"],
        mutationFn: () => deleteMessage(message._id),
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["conversationData"] })
        }
    })

    return (
        <div
            ref={messageRef}
            onContextMenu={handleContextMenu}
            className={`flex flex-col gap-1 rounded-xl min-w-[100px] lg:max-w-[400px] text-white relative ${
                currentUser?._id === message.senderID
                    ? "self-end rounded-br-none"
                    : "self-start rounded-bl-none"
            } bg-message-bg w-max px-4 pt-3 pb-6 max-w-[50%]`}
        >
            <p className="break-words">{message.content}</p>

            <span className="absolute bottom-1 right-2 text-sm text-gray-300">
                {formatDate(message.createdAt)}
            </span>

            <AnimatePresence>
                {openedContextMenu && (
                    <ContextMenu
                        key={`context-menu-${message._id}`}
                        contextMenuPosition={contextMenuPosition}
                        contextMenuRef={contextMenuRef}
                        isOwnMessage={isOwnMessage}
                        onEdit={handleStartEditing}
                        onDelete={deleteMsg}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}
export default Message
