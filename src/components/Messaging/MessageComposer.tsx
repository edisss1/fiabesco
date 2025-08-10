import { useMutation } from "@tanstack/react-query"
import FormInput from "../Common/FormInput"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../redux/store"
import { FormEvent, useEffect, useState } from "react"
import Button from "../Common/Button"
import PlaneIcon from "../../assets/PlaneIcon"
import PaperClipIcon from "../../assets/PaperClipIcon"
import { setEditing } from "../../redux/slices/messagesSlice"

const MessageComposer = ({
    recipientID
}: {
    ref: React.RefObject<HTMLDivElement | null>
    recipientID: string | undefined
}) => {
    const dispatch = useDispatch<AppDispatch>()
    const { isEditing, messageToEdit, messageID } = useSelector(
        (state: RootState) => state.messages
    )
    const { socket } = useSelector((state: RootState) => state.socket)
    const { conversationID } = useParams()
    const senderID = useSelector((state: RootState) => state.auth.user?._id)
    const [content, setContent] = useState("")
    const [newContent, setNewContent] = useState("")

    useEffect(() => {
        if (isEditing) {
            setNewContent(messageToEdit as string)
        }
    }, [messageToEdit, isEditing])

    const { mutate: send } = useMutation({
        mutationKey: ["send"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            if (!content || !senderID || !content || !recipientID) return

            const payload = {
                type: "send_message",
                data: {
                    senderID,
                    recipientID,
                    conversationID,
                    content
                }
            }
            socket?.send(JSON.stringify(payload))
        },

        onSuccess: () => {
            setContent("")
        }
    })

    const { mutate: edit } = useMutation({
        mutationKey: ["edit"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            if (!newContent || !senderID || !messageID) return
            const payload = {
                type: "edit_message",
                data: {
                    messageID,
                    content: newContent,
                    conversationID,
                    senderID
                }
            }

            socket?.send(JSON.stringify(payload))
        },

        onSuccess: () => {
            setNewContent("")
            dispatch(setEditing(false))
        }
    })

    return (
        <form
            aria-label="Message Input"
            onSubmit={isEditing ? edit : send}
            className="w-full flex shrink grow-0  gap-2 border-t-2 p-4 max-h-[100px] self-end  justify-betweenw-full "
        >
            <Button>
                <PaperClipIcon />
            </Button>
            {!isEditing && (
                <FormInput
                    id="send-message"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full  focus:outline-none focus:border-primary transition-colors"
                />
            )}
            {isEditing && (
                <FormInput
                    id="send-message"
                    value={newContent as string}
                    onChange={(e) => setNewContent(e.target.value)}
                    placeholder="Type your message here..."
                    className="w-full  focus:outline-none focus:border-primary transition-colors"
                />
            )}
            <Button
                className="cursor-pointer flex items-center justify-center"
                type="submit"
            >
                <PlaneIcon />
            </Button>
        </form>
    )
}
export default MessageComposer
