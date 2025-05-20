import UserInfoSkeleton from "./UserInfoSkeleton"

const PostSkeleton = () => {
    return (
        <div className="flex flex-col bg-black/5 animate-pulse rounded-lg items-start w-full gap-4 max-w-[800px] p-4">
            <div className="flex items-start gap-4 w-full">
                <UserInfoSkeleton />
            </div>

            <div className="flex flex-col gap-2 w-full">
                <div className="w-full h-4 bg-gray-300 rounded" />
                <div className="w-3/4 h-4 bg-gray-300 rounded" />
                <div className="w-full h-48 bg-gray-300 rounded" />
            </div>

            <div className="flex items-center gap-4 mt-2">
                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                <div className="w-6 h-6 bg-gray-300 rounded-full" />
                <div className="w-6 h-6 bg-gray-300 rounded-full" />
            </div>
        </div>
    )
}
export default PostSkeleton
