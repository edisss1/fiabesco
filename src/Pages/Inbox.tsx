import ConversationsContainer from "../components/atoms/ConversationsContainer"
import ConversationPreview from "../components/atoms/ConversationPreview"
import InboxContainer from "../components/atoms/InboxContainer"
import PageWrapper from "../components/atoms/PageWrapper"

import Arrow from "../assets/Arrow"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/atoms/Button"

import { getConversations } from "../utils/getConversations"
import { useQuery } from "@tanstack/react-query"
import { Conversation } from "../types/Conversation"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"

const Inbox = () => {
    const { conversationID } = useParams()
    const { user } = useSelector((state: RootState) => state.auth)

    const navigate = useNavigate()

    const { data: conversations } = useQuery<Conversation[]>({
        queryKey: ["conversations"],
        queryFn: () => getConversations(user?._id)
    })

    return (
        <PageWrapper sidebarEnabled={false}>
            <InboxContainer>
                <div className="flex flex-col gap-8 p-4 ">
                    <div className="flex items-center gap-2">
                        <Button
                            onClick={() => navigate(-1)}
                            className="p-2 hover:bg-text-primary/30 rounded-full transition-colors duration-150 ease-in"
                        >
                            <Arrow />
                        </Button>
                        <h1 className="text-lg font-bold">Messages</h1>
                    </div>
                    <ConversationsContainer>
                        {conversations?.map((conversation) => (
                            <ConversationPreview
                                recipientFullName={conversation.names[1]}
                                lastMessage={conversation.lastMessage}
                            />
                        ))}
                    </ConversationsContainer>
                </div>
            </InboxContainer>
        </PageWrapper>
    )
}
export default Inbox
