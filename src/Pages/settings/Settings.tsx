import { Outlet } from "react-router-dom"
import PageWrapper from "../../components/Layout/PageWrapper"
import SettingsNav from "../../components/Layout/SettingsNav"

const Settings = () => {
    return (
        <PageWrapper sidebarEnabled headerEnabled header="Settings">
            <SettingsNav />
            <div className="ps-2">
                <Outlet />
            </div>
        </PageWrapper>
    )
}
export default Settings
