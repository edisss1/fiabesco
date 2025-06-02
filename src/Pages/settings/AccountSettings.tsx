import { useDispatch, useSelector } from "react-redux"
import SettingsForm from "../../components/atoms/SettingsForm"
import { AppDispatch, RootState } from "../../redux/store"
import Button from "../../components/atoms/Button"
import { logout } from "../../utils/logout"
import { useNavigate } from "react-router-dom"

const AccountSettings = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { user } = useSelector((state: RootState) => state.auth)

    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-4 ">
            <SettingsForm
                hasChanged
                onSubmit={(e) => console.log(e)}
                id="first-name"
                label="First name"
                onChange={(e) => console.log(e)}
                value={""}
            />
            <SettingsForm
                hasChanged
                onSubmit={(e) => console.log(e)}
                id="last-name"
                label="Last name"
                onChange={(e) => console.log(e)}
                value={""}
            />
            <SettingsForm
                hasChanged
                onSubmit={(e) => console.log(e)}
                id="email"
                label="Email"
                onChange={(e) => console.log(e)}
                value={""}
            />
            <SettingsForm
                hasChanged
                onSubmit={(e) => console.log(e)}
                id="handle"
                label="Handle"
                onChange={(e) => console.log(e)}
                value={""}
            />
            <SettingsForm
                hasChanged
                onSubmit={(e) => console.log(e)}
                id="pwd"
                label="Password"
                onChange={(e) => console.log(e)}
                value={""}
            />
            <div className="flex flex-col gap-6 mt-4">
                <p>
                    Member since{" "}
                    <span className="font-semibold ">
                        {new Date(
                            user?.createdAt as string
                        ).toLocaleDateString()}
                    </span>
                </p>
                <Button
                    onClick={() => logout(navigate, dispatch)}
                    className="cursor-pointer self-start px-6 py-2 bg-secondary rounded-lg text-text-primary hover:scale-105 transition-transform duration-100 min-w-fit"
                >
                    Logout
                </Button>
            </div>
        </div>
    )
}
export default AccountSettings
