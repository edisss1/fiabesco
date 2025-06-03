import { useEffect, useState } from "react"
import Select from "../../components/atoms/Select"
import { languageOptions } from "../../constants/languageOptions"
import { themeOptions } from "../../constants/themeOptions"

const GeneralSettings = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    return (
        <div className="flex flex-col gap-8 min-w-[300px]">
            <Select label="Theme" options={themeOptions} />
            <Select label="Language" options={languageOptions} />
        </div>
    )
}
export default GeneralSettings
