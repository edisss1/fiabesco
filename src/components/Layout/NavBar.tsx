import Fiabesco from "../../assets/Fiabesco"
import Link from "../Common/Link"

const NavBar = () => {
    return (
        <nav className="flex items-center justify-between px-xxl py-6 gap-4">
            <Link variantEnabled={false} path={"/"}>
                <Fiabesco />
            </Link>

            <div className="flex items-center gap-4">
                <Link path="/auth/signup" variant="primary">
                    Sign up
                </Link>
                <Link path="/auth/login" variant="secondary">
                    Login
                </Link>
            </div>
        </nav>
    )
}
export default NavBar
