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

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)
    }, [isDarkMode])

    const updateTheme = (selected: string) => {
        localStorage.setItem("theme", selected)
        setIsDarkMode(selected === "dark")
    }

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = e.target.value

        if (!document.startViewTransition) {
            updateTheme(selected)
            return
        }

        document.startViewTransition(() => {
            updateTheme(selected)
        })
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
        </div>
    )
}

export default GeneralSettings
