import FormInput from "../Common/FormInput"
import { useParams } from "react-router-dom"
import { FormEvent, useEffect, useRef, useState } from "react"
import Button from "../Common/Button"
import PlaneIcon from "../../assets/PlaneIcon"
import PaperClipIcon from "../../assets/PaperClipIcon"
import ReplyPreview from "./ReplyPreview"
import { useMessageFormState } from "../../hooks/useMessageFormState"
import { useMessageActions } from "../../hooks/useMessageActions"
import { setMessageToReply } from "../../redux/slices/messagesSlice"

interface MessageComposerProps {
    recipientID: string | undefined
    userName: string
    recipientName: string | undefined
}

const MessageComposer = ({
    recipientID,
    userName,
    recipientName
}: MessageComposerProps) => {
    const { conversationID } = useParams()
    const [content, setContent] = useState("")
    const [newContent, setNewContent] = useState("")
    const inputRef = useRef<HTMLInputElement | null>(null)

    const {
        isEditing,
        messageToEdit,
        messageID,
        messageToReply,
        socket,
        senderID,
        dispatch
    } = useMessageFormState()

    const { edit, reply, send } = useMessageActions({
        senderID,
        recipientID,
        conversationID: conversationID as string,
        messageID,
        content,
        newContent,
        messageToReply,
        socket,
        setContent,
        setNewContent,
        dispatch
    })

    useEffect(() => {
        if (isEditing) {
            setNewContent(messageToEdit as string)
        }
    }, [messageToEdit, isEditing])

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (isEditing) {
            edit(e)
        } else if (messageToReply) {
            reply(e)
        } else {
            send(e)
        }
    }

    useEffect(() => {
        console.log(messageToReply)
    }, [messageToReply])

    const handleClearReply = () => {
        dispatch(setMessageToReply(null))
    }

    const handleInputFocus = () => {
        if (messageToReply && inputRef.current) {
            inputRef.current.focus()
        }
    }

    useEffect(() => {
        handleInputFocus()
    }, [messageToReply, inputRef.current])

    return (
        <form
            aria-label="Message Input"
            onSubmit={handleSubmit}
            className="w-full"
        >
            {messageToReply && (
                <ReplyPreview
                    userName={
                        messageToReply.senderID === senderID
                            ? userName
                            : recipientName
                    }
                    message={messageToReply}
                    onClear={handleClearReply}
                />
            )}
            <div className="flex shrink grow-0  gap-2 border-t-1 p-4 max-h-[100px] self-end  justify-between ">
                <Button>
                    <PaperClipIcon />
                </Button>
                {!isEditing && (
                    <FormInput
                        ref={inputRef}
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
            </div>
        </form>
    )
}
export default MessageComposer
