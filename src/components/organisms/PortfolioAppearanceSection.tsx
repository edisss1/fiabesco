import ColorPickerGroup from "../molecules/ColorPickerGroup"
import CreatePortfolioSection from "../molecules/CreatePortfolioSection"

const PortfolioAppearanceSection = () => {
    return (
        <CreatePortfolioSection header="Change the appearance">
            <ColorPickerGroup />
        </CreatePortfolioSection>
    )
}
export default PortfolioAppearanceSection
