const ProfilePicture = ({ url }: { url: string | undefined }) => {
    return (
        <div>
            {url ? (
                <img src={url} />
            ) : (
                <div className="w-12 h-12 rounded-full bg-white" />
            )}
        </div>
    )
}
export default ProfilePicture
