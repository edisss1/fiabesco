import { useEffect, useState } from "react"
import Select from "../../components/atoms/Select"
import { languageOptions } from "../../constants/languageOptions"
import { themeOptions } from "../../constants/themeOptions"

const GeneralSettings = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    )
    const [isAnimating, setIsAnimating] = useState(false)
    const [overlayTheme, setOverlayTheme] = useState<"light" | "dark">("light")

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches
        const isDark = storedTheme === "dark" || (!storedTheme && prefersDark)
        setIsDarkMode(isDark)
        document.documentElement.classList.toggle("dark", isDark)
    }, [])

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)
    }, [isDarkMode])

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newTheme = e.target.value as "light" | "dark"
        localStorage.setItem("theme", e.target.value)

        setOverlayTheme(newTheme)
        setIsAnimating(true)

        setTimeout(() => {
            setIsDarkMode(newTheme === "dark")
        }, 400)

        setTimeout(() => {
            setIsAnimating(false)
        }, 800)
    }

    return (
        <div className="flex flex-col gap-8 min-w-[300px]">
            <Select
                value={isDarkMode ? "dark" : "light"}
                onChange={handleThemeChange}
                label="Theme"
                options={themeOptions}
            />
            <Select label="Language" options={languageOptions} />
            {isAnimating && (
                <div
                    className={`fixed inset-0 z-50 pointer-events-none animate-theme`}
                    style={{
                        backgroundColor:
                            overlayTheme === "dark" ? "#1b1b1b" : "#f9f9f9"
                    }}
                />
            )}
        </div>
    )
}
export default GeneralSettings
