import { useDispatch, useSelector } from "react-redux"
import SettingsForm from "../../components/atoms/SettingsForm"
import { AppDispatch, RootState } from "../../redux/store"
import Button from "../../components/atoms/Button"
import { useNavigate } from "react-router-dom"
import { logout } from "../../services/endpoints/auth/logout"
import { useEffect, useState } from "react"
import { useAccountSettings } from "../../hooks/useAccountSettings"

const AccountSettings = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { user } = useSelector((state: RootState) => state.auth)
    const [formData, setFormData] = useState({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        email: user?.email || "",
        handle: user?.handle || "",
        password: ""
    })
    const { updateFirstName, updateLastName, updateEmail, updateHandle } =
        useAccountSettings(
            formData.firstName,
            formData.lastName,
            formData.email,
            formData.handle
        )

    const fieldChanged = (key: keyof typeof formData) => {
        return formData[key] !== user?.[key]
    }

    useEffect(() => {
        setFormData({
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user?.email || "",
            handle: user?.handle || "",
            password: ""
        })
    }, [user])

    const navigate = useNavigate()

    return (
        <div className="flex flex-col gap-4 ">
            <SettingsForm
                hasChanged={fieldChanged("firstName")}
                onSubmit={updateFirstName}
                id="first-name"
                label="First name"
                onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        firstName: e.target.value
                    }))
                }
                value={formData.firstName}
                type="text"
            />
            <SettingsForm
                hasChanged={fieldChanged("lastName")}
                onSubmit={updateLastName}
                id="last-name"
                label="Last name"
                onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        lastName: e.target.value
                    }))
                }
                value={formData.lastName}
                type="text"
            />
            <SettingsForm
                hasChanged={fieldChanged("email")}
                onSubmit={updateEmail}
                id="email"
                label="Email"
                onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        email: e.target.value
                    }))
                }
                value={formData.email}
                type="email"
            />
            <SettingsForm
                hasChanged={fieldChanged("handle")}
                onSubmit={updateHandle}
                id="handle"
                label="Handle"
                onChange={(e) =>
                    setFormData((prev) => ({
                        ...prev,
                        handle: e.target.value
                    }))
                }
                value={formData.handle}
                type="text"
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
