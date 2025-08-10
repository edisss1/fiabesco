import { useSelector } from "react-redux"
import Link from "../Common/Link"
import { RootState } from "../../redux/store"

const NonExistingPath = () => {
    const { user } = useSelector((state: RootState) => state.auth)

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="grid place-items-center gap-">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-9xl">404</h1>
                    <p className="text-2xl">Page not found</p>
                </div>
                <Link
                    className="mt-4"
                    variantEnabled
                    variant="secondary"
                    path={`${user ? "/app/feed" : "/"}`}
                >
                    Go {user ? "back" : "home"}
                </Link>
            </div>
        </div>
    )
}
export default NonExistingPath
