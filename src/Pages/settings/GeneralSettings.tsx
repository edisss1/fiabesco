import { useEffect, useState } from "react"
import Select from "../../components/atoms/Select"
import { languageOptions } from "../../constants/languageOptions"
import { themeOptions } from "../../constants/themeOptions"

const GeneralSettings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode)
        localStorage.setItem("theme", isDarkMode ? "dark" : "light")
    }, [isDarkMode])

    const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setIsDarkMode(e.target.value === "dark")
    }

    return (
        <div className="flex flex-col gap-8 min-w-[300px]">
            <Select
                onChange={handleThemeChange}
                label="Theme"
                options={themeOptions}
            />
            <Select label="Language" options={languageOptions} />
        </div>
    )
}
export default GeneralSettings
