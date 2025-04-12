import React from "react"

interface ProfileWrapperProps {
    children: React.ReactNode
}

const ProfileWrapper = ({ children }: ProfileWrapperProps) => {
    return <div className="w-full  flex flex-col gap-4 ">{children}</div>
}
export default ProfileWrapper
