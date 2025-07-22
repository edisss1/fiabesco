// this component will be used for 1 on 1 chats only i think

import { Link } from "react-router-dom"
import Button from "./Button"
import Arrow from "../../assets/Arrow"
import ProfilePicture from "../molecules/ProfilePicture"

interface RecipientInfoProps {
    fullName: string | undefined
    recipientID: string | undefined
    photoURL: string | undefined
    onClick?: () => void
}

const RecipientInfo = ({
    fullName,
    recipientID,
    photoURL,
    onClick
}: RecipientInfoProps) => {
    return (
        <div className="flex items-center max-lg:px-3">
            <Button className="lg:hidden" onClick={onClick}>
                <Arrow />
            </Button>

            <Link
                to={`/app/profile/${recipientID}`}
                aria-label="Recipient Info"
                className="flex items-center gap-2 px-4 py-2"
            >
                <ProfilePicture url={photoURL} />
                <div className="flex flex-col grow-0 shrink ">
                    <h2 className="text-lg">{fullName}</h2>
                    <span className="text-sm">Last seen at 18:07</span>
                </div>
            </Link>
        </div>
    )
}
export default RecipientInfo
