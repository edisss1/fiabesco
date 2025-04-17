// this component will be used for 1 on 1 chats only i think

import { User } from "../../types/User"
import UserInfo from "./UserInfo"

interface RecipientInfoProps {
    recipient: User
}

const RecipientInfo = ({ recipient }: RecipientInfoProps) => {
    return (
        <div className="flex items-center w-full">
            <UserInfo
                firstName={recipient.firstName}
                lastName={recipient.lastName}
                photoURL={recipient.photoURL}
                userID={recipient._id}
                lastSeen="18:07"
            />
        </div>
    )
}
export default RecipientInfo
