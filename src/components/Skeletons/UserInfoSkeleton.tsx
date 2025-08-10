const UserInfoSkeleton = () => {
    return (
        <div className="flex items-center gap-1 p-1 animate-pulse">
            <div className="w-12 h-12 rounded-full bg-gray-300" />
            <div className="flex flex-col gap-1">
                <div className="w-24 h-4 bg-gray-300 rounded" />
                <div className="w-16 h-3 bg-gray-300 rounded" />
            </div>
        </div>
    )
}
export default UserInfoSkeleton
