import { useSelector } from "react-redux"
import SettingsForm from "../../components/atoms/SettingsForm"
import { RootState } from "../../redux/store"

const AccountSettings = () => {
    const { user } = useSelector((state: RootState) => state.auth)

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
            </div>
        </div>
    )
}
export default AccountSettings
