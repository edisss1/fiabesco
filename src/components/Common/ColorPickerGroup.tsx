import { useDispatch, useSelector } from "react-redux"
import ColorPicker from "./ColorPicker"
import { AppDispatch, RootState } from "../../redux/store"
import {
    updateBgColor,
    updatePrimaryColor,
    updateTextColor
} from "../../redux/slices/portfolioSlice"

const ColorPickerGroup = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { textColor, bgColor, primaryColor } = useSelector(
        (state: RootState) => state.portfolio.portfolioData.appearance
    )

    return (
        <div className="flex flex-col gap-2 items-center w-full max-w-[260px]">
            <ColorPicker
                text="Text"
                id="color-text"
                value={textColor}
                onChange={(e) => dispatch(updateTextColor(e.target.value))}
            />
            <ColorPicker
                text="Background"
                id="color-bg"
                value={bgColor}
                onChange={(e) => dispatch(updateBgColor(e.target.value))}
            />
            <ColorPicker
                text="Primary"
                id="color-primary"
                value={primaryColor}
                onChange={(e) => dispatch(updatePrimaryColor(e.target.value))}
            />
        </div>
    )
}
export default ColorPickerGroup
