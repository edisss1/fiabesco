import { FormEvent, useEffect, useState } from "react"
import ProjectImgUpload from "../../assets/ProjectImgUpload"
import ExternalLinkIcon from "../../assets/ExternalLinkIcon"
import Button from "./Button"
import { Portfolio } from "../../types/Portfolio"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store"
import { addProject } from "../../redux/slices/portfolioSlice"

const AddPortfolioProject = () => {
    const [selectedImg, setSelectedImg] = useState<File | null>(null)
    const [previewURL, setPreviewURL] = useState<string | null>(null)
    const [projectTitle, setProjectTitle] = useState<string>("")
    const [projectLink, setProjectLink] = useState<string>("")
    const dispatch = useDispatch<AppDispatch>()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        const project: Portfolio["projects"][0] = {
            img: selectedImg as File,
            title: projectTitle,
            link: projectLink
        }
        dispatch(addProject(project))

        setSelectedImg(null)
        setPreviewURL(null)
        setProjectTitle("")
        setProjectLink("")
    }

    const isValid = selectedImg !== null && projectTitle.trim() !== ""

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setSelectedImg(e.target.files[0])
            setPreviewURL(URL.createObjectURL(e.target.files[0]))
        }
    }

    useEffect(() => {
        return () => {
            if (previewURL) URL.revokeObjectURL(previewURL)
        }
    }, [previewURL])

    return (
        <form
            onSubmit={onSubmit}
            className="max-w-[140px] [&>*]:max-w-full flex flex-col gap-1"
        >
            <div
                className={`w-full relative rounded-lg aspect-square ${
                    !previewURL && "bg-primary"
                }`}
            >
                {previewURL && (
                    <img
                        className="w-full aspect-square object-cover rounded-lg"
                        src={previewURL}
                    />
                )}
                {!previewURL && (
                    <>
                        <label
                            className="absolute inset-0  flex items-center justify-center"
                            htmlFor="project-img-upload"
                        >
                            <ProjectImgUpload />
                        </label>
                        <input
                            id="project-img-upload"
                            className="hidden w-full h-full"
                            type="file"
                            onChange={onFileChange}
                            accept="image/*"
                        />
                    </>
                )}
            </div>
            <input
                className="p-1 rounded-lg focus:outline-primary"
                placeholder="Write title here..."
                value={projectTitle}
                type="text"
                onChange={(e) => setProjectTitle(e.target.value)}
            />
            <div className="flex items-center justify-center ">
                <ExternalLinkIcon />
                <input
                    placeholder="Paste a link..."
                    className="p-1 rounded-lg focus:outline-primary max-w-[116px]"
                    value={projectLink}
                    type="text"
                    onChange={(e) => setProjectLink(e.target.value)}
                />
            </div>
            {isValid && (
                <Button type="submit" variant="secondary">
                    +{" "}
                </Button>
            )}
        </form>
    )
}
export default AddPortfolioProject
