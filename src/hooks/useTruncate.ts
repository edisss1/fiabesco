import { useState } from "react"

export function useTruncate(content: string) {
    const [isReadingMore, setIsReadingMore] = useState(false)

    const isTextTooLong = content.length >= 200
    const charactersToDisplay = isReadingMore ? content.length : 200
    const ellipsis = isTextTooLong && !isReadingMore ? "..." : ""
    const truncatedContent = content.slice(0, charactersToDisplay) + ellipsis
    const showButton = isTextTooLong

    console.log("Content: ", content, "Truncated: ", truncatedContent)

    return {
        truncatedContent,
        showButton,
        isReadingMore,
        setIsReadingMore
    }
}
