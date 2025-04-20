import { useMutation, useQueryClient } from "@tanstack/react-query"
import FormInput from "../atoms/FormInput"
import { sendMessage } from "../../utils/sendMessage"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { FormEvent, useState } from "react"
import Button from "../atoms/Button"

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
                queryKey: ["conversationData"]
            })
            setContent("")
            ref.current?.scrollIntoView({ behavior: "smooth" })
        }
    })

    console.log(conversationID)

    return (
        <form
            onSubmit={send}
            className=" flex items-center border-t-2 px-2  justify-betweenw-full "
        >
            <FormInput
                id="send-message"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Type your message"
                className="w-full p-4 focus:outline-none focus:border-primary transition-colors"
            />
            <Button className="cursor-pointer" type="submit">
                Send
            </Button>
        </form>
    )
}
export default MessageComposer
