import { useSelector } from "react-redux"
import ColorPicker from "../atoms/ColorPicker"
import { RootState } from "../../redux/store"

const ColorPickerGroup = () => {
    const { textColor, bgColor, primaryColor } = useSelector(
        (state: RootState) => state.portfolio.portfolioData.appearance
    )

    return (
        <div className="flex flex-col gap-2 items-center w-full max-w-[260px]">
            <ColorPicker
                text="Text"
                id="color-text"
                value={textColor}
                onChange={() => {}}
            />
            <ColorPicker
                text="Background"
                id="color-bg"
                value={bgColor}
                onChange={() => {}}
            />
            <ColorPicker
                text="Primary"
                id="color-primary"
                value={primaryColor}
                onChange={() => {}}
            />
        </div>
    )
}
export default ColorPickerGroup
