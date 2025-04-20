import { useMutation, useQueryClient } from "@tanstack/react-query"
import FormInput from "../atoms/FormInput"
import { sendMessage } from "../../utils/sendMessage"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { FormEvent, useState } from "react"
import Button from "../atoms/Button"
import PlaneIcon from "../../assets/PlaneIcon"
import PaperClipIcon from "../../assets/PaperClipIcon"

const MessageComposer = ({
    ref
}: {
    ref: React.RefObject<HTMLDivElement | null>
}) => {
    const { conversationID } = useParams()
    const senderID = useSelector((state: RootState) => state.auth.user?._id)
    const [content, setContent] = useState("")
    const queryClient = useQueryClient()

    const { mutate: send } = useMutation({
        mutationKey: ["send"],
        mutationFn: (e: FormEvent) =>
            sendMessage(content, senderID, conversationID, e),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["conversationData", "conversations"]
            })
            setContent("")
            ref.current?.scrollIntoView({ behavior: "smooth" })
        }
    })

    return (
        <form
            onSubmit={send}
            className=" flex  gap-2 border-t-2 p-4 max-h-[100px] self-end  justify-betweenw-full "
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
