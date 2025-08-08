import { FormEvent } from "react"
import Button from "./Button"

interface SettingsFormProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label: string
    id: string
    hasChanged: boolean
    onSubmit: (e: FormEvent) => void
    ref?: React.RefObject<HTMLInputElement> | null
    type?: string
    error: string | null
}

const SettingsForm = ({
    value,
    onChange,
    label,
    id,
    hasChanged,
    ref,
    type,
    onSubmit,
    error
}: SettingsFormProps) => {
    return (
        <form onSubmit={onSubmit} className="flex flex-col items-start gap-2">
            <div className="flex items-end gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor={id}>{label}</label>
                    <input
                        ref={ref && ref}
                        className="focus:outline-primary p-2 rounded-lg border-2 border-text-primary dark:border-text-primary-dark"
                        type={type}
                        id={id}
                        value={value}
                        onChange={onChange}
                    />
                </div>
                {hasChanged && (
                    <Button
                        className="min-w-fit "
                        variant="secondary"
                        variantEnabled
                        type="submit"
                    >
                        Save
                    </Button>
                )}
            </div>
            {error && <p className="text-danger">{error}</p>}
        </form>
    )
}
export default SettingsForm
