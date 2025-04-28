// this component will be used for 1 on 1 chats only i think

import { Link } from "react-router-dom"

interface RecipientInfoProps {
    fullName: string | undefined
    recipientID: string | undefined
}

const RecipientInfo = ({ fullName, recipientID }: RecipientInfoProps) => {
    return (
        <Link
            to={`/app/profile/${recipientID}`}
            aria-label="Recipient Info"
            className="flex flex-col grow-0 shrink w-full px-4 py-2"
        >
            <h2 className="text-lg">{fullName}</h2>
            <span className="text-sm">Last seen at 18:07</span>
        </Link>
    )
}
export default RecipientInfo
