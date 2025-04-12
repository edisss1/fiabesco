import React from "react"

interface ProfileWrapperProps {
    children: React.ReactNode
}

const ProfileWrapper = ({ children }: ProfileWrapperProps) => {
    return (
        <div className="w-full max-w-[800px] h-full border-x-2 flex flex-col gap-4 border-text-secondary ">
            {children}
        </div>
    )
}
export default ProfileWrapper
