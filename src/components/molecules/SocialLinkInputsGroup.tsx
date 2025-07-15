import { useDispatch, useSelector } from "react-redux"
import ArtStationIcon from "../../assets/social-media/ArtStationIcon"
import BehanceIcon from "../../assets/social-media/BehanceIcon"
import DribbbleIcon from "../../assets/social-media/DribbbleIcon"
import PinterestIcon from "../../assets/social-media/PinterestIcon"
import FormInput from "../atoms/FormInput"
import { AppDispatch, RootState } from "../../redux/store"
import { updateSocialLinks } from "../../redux/slices/portfolioSlice"

const SocialLinkInputsGroup = () => {
    const dispatch = useDispatch<AppDispatch>()
    const {
        behanceProfileLink,
        dribbbleProfileLink,
        pinterestProfileLink,
        artStationProfileLink
    } = useSelector(
        (state: RootState) => state.portfolio.portfolioData.contactInfo
    )

    return (
        <div className="flex flex-col gap-4 max-w-[250px]">
            <FormInput
                id="behance-profile"
                flexDirection="flex-row"
                alignItems="items-center"
                label={<BehanceIcon />}
                placeholder="Behance profile..."
                value={behanceProfileLink}
                onChange={(e) =>
                    dispatch(
                        updateSocialLinks({
                            field: "behanceProfileLink",
                            value: e.target.value
                        })
                    )
                }
            />
            <FormInput
                id="dribbble-profile"
                flexDirection="flex-row"
                alignItems="items-center"
                label={<DribbbleIcon />}
                placeholder="Dribbble profile..."
                value={dribbbleProfileLink}
                onChange={(e) =>
                    dispatch(
                        updateSocialLinks({
                            field: "dribbbleProfileLink",
                            value: e.target.value
                        })
                    )
                }
            />
            <FormInput
                id="pinterest-profile"
                flexDirection="flex-row"
                alignItems="items-center"
                label={<PinterestIcon />}
                placeholder="Pinterest profile..."
                value={pinterestProfileLink}
                onChange={(e) =>
                    dispatch(
                        updateSocialLinks({
                            field: "pinterestProfileLink",
                            value: e.target.value
                        })
                    )
                }
            />
            <FormInput
                id="artstation-profile"
                flexDirection="flex-row"
                alignItems="items-center"
                label={<ArtStationIcon />}
                placeholder="ArtStation profile..."
                value={artStationProfileLink}
                onChange={(e) =>
                    dispatch(
                        updateSocialLinks({
                            field: "artStationProfileLink",
                            value: e.target.value
                        })
                    )
                }
            />
        </div>
    )
}
export default SocialLinkInputsGroup
