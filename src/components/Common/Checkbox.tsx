interface CheckboxProps {
    label: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    checked: boolean
    id: string
}

const Checkbox = ({ label, onChange, checked, id }: CheckboxProps) => {
    return (
        <label className="flex items-center gap-1 w-fit" htmlFor={id}>
            <input
                className="appearance-none w-5 h-5 border-1 border-text-primary rounded-md checked:bg-secondary relative checked:before:content-['✔'] checked:before:text-lg checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2 after:text-text-primary"
                id={id}
                type="checkbox"
                onChange={onChange}
                checked={checked}
            />
            <span className="select-none">{label}</span>
        </label>
    )
}
export default Checkbox
