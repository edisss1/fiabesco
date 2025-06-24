import { useDispatch, useSelector } from "react-redux"
import Checkbox from "../atoms/Checkbox"
import FormInput from "../atoms/FormInput"
import CreatePortfolioSection from "../molecules/CreatePortfolioSection"
import SocialLinkInputsGroup from "../molecules/SocialLinkInputsGroup"
import { AppDispatch, RootState } from "../../redux/store"
import {
    updateAllowEmails,
    updateSocialLinks
} from "../../redux/slices/portfolioSlice"
import { useEffect } from "react"

const PortfolioContactSection = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { allowEmails } = useSelector(
        (state: RootState) => state.portfolio.portfolioData
    )
    const { user } = useSelector((state: RootState) => state.auth)
    const { email: contactEmail } = useSelector(
        (state: RootState) => state.portfolio.portfolioData.contactInfo
    )

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked
        dispatch(updateAllowEmails(isChecked))

        if (isChecked && user && contactEmail.trim() === "") {
            dispatch(updateSocialLinks({ field: "email", value: user.email }))
        }

        if (!isChecked && contactEmail === user?.email) {
            dispatch(updateSocialLinks({ field: "email", value: "" }))
        }
    }

    useEffect(() => {
        console.log(contactEmail)
    }, [contactEmail])

    return (
        <CreatePortfolioSection header="Share your contact information">
            <h5>
                Include links to your social media profiles or simply write an
                email address.
            </h5>
            <div className="w-full max-w-[600px] flex flex-col gap-4 ">
                <FormInput
                    id="contact-email"
                    placeholder="Email"
                    className="max-w-[200px] border-2 border-text-primary  rounded-lg p-2"
                    value={contactEmail}
                    onChange={(e) =>
                        dispatch(
                            updateSocialLinks({
                                field: "email",
                                value: e.target.value
                            })
                        )
                    }
                />
                <Checkbox
                    id="allow-emails"
                    checked={allowEmails}
                    onChange={handleCheckboxChange}
                    label="Allow users to send me an email"
                />
                <p className="opacity-60 max-w-[400px]">
                    If agreed and an email was not provided, we will use the
                    email address associated with your account at sign up.
                </p>
                <SocialLinkInputsGroup />
            </div>
        </CreatePortfolioSection>
    )
}
export default PortfolioContactSection
