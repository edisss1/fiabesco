import InboxContainer from "../components/atoms/InboxContainer"
import PageWrapper from "../components/atoms/PageWrapper"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import Conversation from "../components/organisms/Conversation"
import { useEffect, useState } from "react"
import { useConversations } from "../hooks/useConversations"
import { setSocket } from "../redux/slices/websocketSlice"
import { useMessages } from "../hooks/useMessages"
import InboxSidebar from "../components/organisms/InboxSidebar"

const Inbox = () => {
    const { socket } = useSelector((state: RootState) => state.socket)
    const dispatch = useDispatch<AppDispatch>()
    const { conversationID } = useParams()
    const { user } = useSelector((state: RootState) => state.auth)
    const { conversationData, conversations } = useConversations(
        user?._id,
        conversationID
    )
    const { messages } = useMessages(socket, conversationID, conversationData)

    const [isConversationOpened, setIsConversationOpened] = useState(false)

    const handleOpen = () => {
        setIsConversationOpened(true)
    }
    const handleClose = () => {
        setIsConversationOpened(false)
    }

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
    }, [conversationID, user?._id])

    return (
        <PageWrapper sidebarEnabled={false}>
            <InboxContainer>
                <InboxSidebar
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
                        names={conversationData?.conversation.names}
                        messages={messages}
                    />
                ) : (
                    <div className="flex items-center px-2 py-1 bg-primary self-center rounded-full justify-center mx-auto max-lg:-z-[100]">
                        <span className="font-bold">Select a conversation</span>
                    </div>
                )}
            </InboxContainer>
        </PageWrapper>
    )
}
export default Inbox
