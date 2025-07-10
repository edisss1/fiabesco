import ChevronDownIcon from "../../assets/ChevronDownIcon"

type SelectOption = {
    label: string
    value: string
}

interface SelectProps {
    options: SelectOption[]
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    label?: string
    value: string
}

const Select = ({ options, onChange, label, value }: SelectProps) => {
    return (
        <div
            className={`relative flex justify-between items-center gap-4 text-typography-light  `}
        >
            {label && <label>{label}</label>}
            <select
                value={value}
                onChange={onChange}
                className="appearance-none min-w-[200px] border-2 bg-bg-light dark:bg-bg-dark  text-typography-light dark:text-typography-dark  border-typography-light dark:border-typography-dark p-2 rounded-md"
            >
                {options.map((option) => (
                    <option
                        className="dark:text-text-primary-dark dark:bg-background-dark"
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
            <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none dark:[&>*]:stroke-text-primary-dark" />
        </div>
    )
}
export default Select
