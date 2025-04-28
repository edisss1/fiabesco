import ConversationsContainer from "../components/atoms/ConversationsContainer"
import ConversationPreview from "../components/atoms/ConversationPreview"
import InboxContainer from "../components/atoms/InboxContainer"
import PageWrapper from "../components/atoms/PageWrapper"
import Arrow from "../assets/Arrow"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/atoms/Button"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import Conversation from "../components/organisms/Conversation"
import { useEffect, useState } from "react"
import { MessageType } from "../types/Message"
import { useConversations } from "../hooks/useConversations"
import { setSocket } from "../redux/slices/websocketSlice"

const Inbox = () => {
    const { socket } = useSelector((state: RootState) => state.socket)
    const dispatch = useDispatch<AppDispatch>()
    const { conversationID } = useParams()
    const { user } = useSelector((state: RootState) => state.auth)
    const [messages, setMessages] = useState<MessageType[]>([])
    const { conversationData, conversations } = useConversations(
        user?._id,
        conversationID
    )

    const navigate = useNavigate()

    useEffect(() => {
        if (user?._id) {
            const socket = new WebSocket(
                `ws://localhost:3000/ws?userID=${user?._id}`
            )
            socket.onopen = () => {
                console.log(`Connected to socket - ${socket.url}`)
            }

            dispatch(setSocket(socket))
        }
    }, [])

    useEffect(() => {
        setMessages(conversationData?.messages ? conversationData.messages : [])
    }, [conversationData, conversationID])

    useEffect(() => {
        if (socket) {
            socket.onmessage = (event) => {
                const incoming = JSON.parse(event.data) as MessageType
                setMessages((prev) => [...prev, incoming])
            }
        }
    }, [socket])

    return (
        <PageWrapper sidebarEnabled={false}>
            <InboxContainer>
                <div className="flex flex-col gap-8 p-4 border-r-2 w-full max-w-[300px] h-screen">
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => navigate("/app/feed")}
                            className="p-2 hover:bg-text-primary/30 rounded-full transition-colors duration-150 ease-in"
                        >
                            <Arrow />
                        </Button>
                        <h1 className="text-lg font-bold">Messages</h1>
                    </div>
                    <ConversationsContainer>
                        {conversations?.map((conversation) => (
                            <ConversationPreview
                                conversationID={conversationID}
                                key={conversation._id}
                                names={conversation.names}
                                id={conversation._id}
                                lastMessage={conversation.lastMessage}
                            />
                        ))}
                    </ConversationsContainer>
                </div>
                {conversationID && (
                    <Conversation
                        conversationID={conversationID}
                        key={conversationID}
                        participants={
                            conversationData?.conversation.participants
                        }
                        names={conversationData?.conversation.names}
                        messages={messages}
                    />
                )}
            </InboxContainer>
        </PageWrapper>
    )
}
export default Inbox
