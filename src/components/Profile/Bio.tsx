import { UseMutateFunction } from "@tanstack/react-query"
import { FormEvent } from "react"
import CheckMarkIcon from "../../assets/CheckMarkIcon"
import Button from "../Common/Button"
import PencilIcon from "../../assets/PencilIcon"

interface BioProps {
    bio: string | undefined
    updateBio: UseMutateFunction<
        string | undefined,
        Error,
        FormEvent<Element>,
        unknown
    >
    isEditing: boolean
    isOwner: boolean
    handleBioChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleIsEditingChange: () => void
    newBio: string | undefined
}

const Bio = ({
    bio,
    updateBio,
    isEditing,
    isOwner,
    handleBioChange,
    handleIsEditingChange,
    newBio
}: BioProps) => {
    return (
        <div className="flex items-center gap-2">
            {!isEditing && (
                <span className="text-sm">{bio ? bio : "No bio yet"}</span>
            )}
            {isOwner && isEditing && (
                <form onSubmit={updateBio} className="flex items-center gap-2">
                    <input
                        className="border-b-2 focus:outline-none focus:border-secondary transition-all"
                        placeholder="Enter your new bio"
                        type="text"
                        value={newBio}
                        onChange={handleBioChange}
                    />
                    <Button
                        type="submit"
                        className="cursor-pointer hover:bg-black/30 rounded-lg p-1 transition-all"
                    >
                        <CheckMarkIcon />
                    </Button>
                </form>
            )}
            {isOwner && !isEditing && (
                <Button
                    onClick={handleIsEditingChange}
                    className="cursor-pointer hover:bg-black/30 rounded-lg transition-all"
                >
                    <PencilIcon className="dark:[&>*]:fill-text-primary-dark" />
                </Button>
            )}
        </div>
    )
}
export default Bio
