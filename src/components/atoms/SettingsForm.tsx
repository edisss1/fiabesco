import { FormEvent } from "react"
import Button from "./Button"

interface SettingsFormProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label: string
    id: string
    hasChanged: boolean
    onSubmit: (e: FormEvent) => void
}

const SettingsForm = ({
    value,
    onChange,
    label,
    id,
    hasChanged
}: SettingsFormProps) => {
    return (
        <form className="flex items-center gap-4 max-md:items-end">
            <div className="flex w-full max-w-[350px] md:gap-9 max-md:flex-col justify-between ">
                <label htmlFor={id}>{label}</label>
                <input
                    className="border-2  border-text-primary max-w-[300px] focus:outline-primary p-2 rounded-lg"
                    type="text"
                    id={id}
                    value={value}
                    onChange={onChange}
                />
            </div>
            <Button className="min-w-fit " variant="secondary" variantEnabled>
                Save
            </Button>
        </form>
    )
}
export default SettingsForm
