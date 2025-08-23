import InboxContainer from "../components/Messaging/InboxContainer"
import PageWrapper from "../components/Layout/PageWrapper"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import Conversation from "../components/Messaging/Conversation"
import { useCallback, useEffect, useState } from "react"
import { useConversations } from "../hooks/useConversations"
import { setSocket } from "../redux/slices/websocketSlice"
import { useMessages } from "../hooks/useMessages"
import InboxSidebar from "../components/Messaging/InboxSidebar"
import { setMessageToReply } from "../redux/slices/messagesSlice"

const Inbox = () => {
    const { socket } = useSelector((state: RootState) => state.socket)
    const { messageToReply } = useSelector((state: RootState) => state.messages)
    const dispatch = useDispatch<AppDispatch>()
    const { conversationID } = useParams()
    const { user } = useSelector((state: RootState) => state.auth)
    const { conversationData, conversations } = useConversations(
        user?._id,
        conversationID
    )
    const { messages } = useMessages(socket, conversationID, conversationData)

    const [isConversationOpened, setIsConversationOpened] = useState(false)
    const navigate = useNavigate()

    const handleOpen = () => {
        setIsConversationOpened(true)
    }
    const handleClose = useCallback(() => {
        setIsConversationOpened(false)
    }, [])

    useEffect(() => {
        if (user?._id) {
            const socket = new WebSocket(
                `ws://localhost:3000/ws?userID=${user?._id}`
            )

            socket.onopen = () => {
                console.log(`Connected to socket - ${socket.url}`)
            }

            dispatch(setSocket(socket))

            return () => {
                socket.close()
            }
        }
    }, [conversationID, user?._id, dispatch])

    const handleKeyBindings = useCallback(
        (e: KeyboardEvent) => {
            if (e.key !== "Escape") return

            if (e.key === "Escape" && messageToReply) {
                dispatch(setMessageToReply(null))
                return
            }

            handleClose()
            navigate("/app/inbox")
        },
        [handleClose, navigate, messageToReply, dispatch]
    )

    useEffect(() => {
        document.addEventListener("keydown", handleKeyBindings)
        return () => {
            document.removeEventListener("keydown", handleKeyBindings)
        }
    }, [handleKeyBindings])

    return (
        <PageWrapper sidebarEnabled={false}>
            <InboxContainer>
                <InboxSidebar
                    userID={user?._id}
                    isConversationOpened={isConversationOpened}
                    conversations={conversations}
                    conversationID={conversationID}
                    onClick={handleOpen}
                />
                {conversationID ? (
                    <Conversation
                        onClick={handleClose}
                        conversationID={conversationID}
                        key={conversationID}
                        participants={
                            conversationData?.conversation.participants
                        }
                        messages={messages}
                    />
                ) : (
                    <div className="flex items-center px-2 py-1 bg-primary text-text-primary self-center rounded-full justify-center mx-auto max-lg:-z-[100]">
                        <span className="font-bold">Select a conversation</span>
                    </div>
                )}
            </InboxContainer>
        </PageWrapper>
    )
}
export default Inbox
