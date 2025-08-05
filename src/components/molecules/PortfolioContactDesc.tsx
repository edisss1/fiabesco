import ArtStationIcon from "../../assets/social-media/ArtStationIcon"
import BehanceIcon from "../../assets/social-media/BehanceIcon"
import DribbbleIcon from "../../assets/social-media/DribbbleIcon"
import PinterestIcon from "../../assets/social-media/PinterestIcon"
import { Portfolio } from "../../types/Portfolio"
import PortfolioAnchor from "../atoms/PortfolioAnchor"

interface PortfolioContactDescProps {
    contactInfo: Portfolio["contactInfo"]
    textColor: string
}

const PortfolioContactDesc = ({
    contactInfo,
    textColor
}: PortfolioContactDescProps) => {
    return (
        <div
            style={{ color: textColor }}
            className="flex flex-col justify-start gap-4 md:max-w-[300px] "
        >
            <h3 className="text-[2rem] font-bold">Let's work together</h3>
            <p>
                Have a project, idea, or collaboration in mind? I’m always open
                to working with inspiring people. Use the form below to reach
                out — I’d love to hear what you're thinking.
            </p>
            <div className="flex items-center gap-4">
                <PortfolioAnchor
                    icon={<BehanceIcon />}
                    url={contactInfo.behanceProfileLink}
                />
                <PortfolioAnchor
                    icon={<DribbbleIcon />}
                    url={contactInfo.dribbbleProfileLink}
                />
                <PortfolioAnchor
                    icon={<PinterestIcon />}
                    url={contactInfo.pinterestProfileLink}
                />
                <PortfolioAnchor
                    icon={<ArtStationIcon />}
                    url={contactInfo.artStationProfileLink}
                />
            </div>
        </div>
    )
}
export default PortfolioContactDesc
