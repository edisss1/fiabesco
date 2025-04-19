// this component will be used for 1 on 1 chats only i think

interface RecipientInfoProps {
    fullName: string
}

const RecipientInfo = ({ fullName }: RecipientInfoProps) => {
    return (
        <div className="flex flex-col  w-full px-4 py-2">
            <h2 className="text-lg">{fullName}</h2>
            <span className="text-sm">Last seen at 18:07</span>
        </div>
    )
}
export default RecipientInfo
