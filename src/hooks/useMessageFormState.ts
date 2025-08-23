import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"

export function useMessageFormState() {
    const dispatch = useDispatch<AppDispatch>()
    const { isEditing, messageToEdit, messageID, messageToReply } = useSelector(
        (state: RootState) => state.messages
    )
    const { socket } = useSelector((state: RootState) => state.socket)
    const senderID = useSelector((state: RootState) => state.auth.user?._id)

    return {
        isEditing,
        messageToEdit,
        messageID,
        messageToReply,
        socket,
        senderID,
        dispatch
    }
}
