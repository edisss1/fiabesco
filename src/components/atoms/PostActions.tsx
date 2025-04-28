import { Link } from "react-router-dom"
import Button from "./Button"

interface PostActionsProps {
    count: number
    onClick?: () => void
    icon: React.ReactNode
    type: "link" | "button"
    to?: string
}

const PostActions = ({ count, onClick, icon, type, to }: PostActionsProps) => {
    const className =
        "p-1 rounded-full hover:bg-primary/50 transition-colors duration-200 flex items-center justify-center"

    return (
        <div>
            {type === "button" ? (
                <div className="flex items-center gap-2">
                    <span>{count}</span>
                    <Button className={className} onClick={onClick}>
                        {icon}
                    </Button>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <span>{count}</span>
                    <Link className={className} to={to as string}>
                        {icon}
                    </Link>
                </div>
            )}
        </div>
    )
}
export default PostActions
