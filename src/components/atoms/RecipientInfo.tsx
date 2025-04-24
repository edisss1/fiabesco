// this component will be used for 1 on 1 chats only i think

interface RecipientInfoProps {
    fullName: string | undefined
}

const RecipientInfo = ({ fullName }: RecipientInfoProps) => {
    return (
        <div
            aria-label="Recipient Info"
            className="flex flex-col grow-0 shrink w-full px-4 py-2"
        >
            <h2 className="text-lg">{fullName}</h2>
            <span className="text-sm">Last seen at 18:07</span>
        </div>
    )
}
export default RecipientInfo
