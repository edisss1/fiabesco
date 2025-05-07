import { useMutation } from "@tanstack/react-query"
import FormInput from "../atoms/FormInput"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { FormEvent, useState } from "react"
import Button from "../atoms/Button"
import PlaneIcon from "../../assets/PlaneIcon"
import PaperClipIcon from "../../assets/PaperClipIcon"

const MessageComposer = ({
    recipientID
}: {
    ref: React.RefObject<HTMLDivElement | null>
    recipientID: string | undefined
}) => {
    const { socket } = useSelector((state: RootState) => state.socket)
    const { conversationID } = useParams()
    const senderID = useSelector((state: RootState) => state.auth.user?._id)
    const [content, setContent] = useState("")

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

    return (
        <form
            aria-label="Message Input"
            onSubmit={send}
            className="w-full flex shrink grow-0  gap-2 border-t-2 p-4 max-h-[100px] self-end  justify-betweenw-full "
        >
            <Button>
                <PaperClipIcon />
            </Button>
            <FormInput
                id="send-message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your message here..."
                className="w-full  focus:outline-none focus:border-primary transition-colors"
            />
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
