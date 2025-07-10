import { useEffect, useState } from "react"
import Select from "../../components/atoms/Select"
import { languageOptions } from "../../constants/languageOptions"
import { themeOptions } from "../../constants/themeOptions"

const GeneralSettings = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
        return storedTheme === "dark" || (!storedTheme && prefersDark)
    })
    const [isAnimating, setIsAnimating] = useState(false)
    const [overlayTheme, setOverlayTheme] = useState<"light" | "dark">(
        isDarkMode ? "dark" : "light"
    )

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)
    }, [isDarkMode])

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTheme = e.target.value as "light" | "dark"
        localStorage.setItem("theme", newTheme)
        setOverlayTheme(newTheme)
        setIsAnimating(true)
    }

    const onAnimationEnd = () => {
        setIsDarkMode(overlayTheme === "dark")
        setIsAnimating(false)
    }

    return (
        <div className="flex flex-col gap-8 min-w-[300px] relative">
            <Select
                value={isDarkMode ? "dark" : "light"}
                onChange={handleThemeChange}
                label="Theme"
                options={themeOptions}
            />
            <Select label="Language" options={languageOptions} />

            {isAnimating && (
                <div
                    onAnimationEnd={onAnimationEnd}
                    className="fixed inset-0 z-50 pointer-events-none animate-theme"
                    style={{
                        backgroundColor:
                            overlayTheme === "dark"
                                ? "var(--color-background-dark)"
                                : "var(--color-background)"
                    }}
                />
            )}
        </div>
    )
}

export default GeneralSettings
