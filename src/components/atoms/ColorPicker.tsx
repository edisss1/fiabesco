interface ColorPickerProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    id: string
    text: string
}

const ColorPicker = ({ value, onChange, id, text }: ColorPickerProps) => {
    return (
        <div className="flex items-center justify-between gap-4 w-[260px] ">
            <h4>{text}</h4>
            <div className="border-2 rounded-xl p-2">
                <label
                    className="flex items-center gap-1 cursor-pointer"
                    htmlFor={id}
                >
                    <span
                        className="w-4 h-4 rounded-sm border-1"
                        style={{ backgroundColor: value ? value : "#333" }}
                    ></span>
                    <p>{value}</p>
                </label>
                <input
                    value={value}
                    onChange={onChange}
                    id={id}
                    className="sr-only"
                    type="color"
                />
            </div>
        </div>
    )
}
export default ColorPicker
