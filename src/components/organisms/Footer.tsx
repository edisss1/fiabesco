import { Link } from "react-router-dom"
import Fiabesco from "../../assets/Fiabesco"
import { footerLinks } from "../../constants/footerLinks"

const Footer = () => {
    return (
        <footer className="bg-primary px-xxl py-6 grid grid-rows-4 text-white ">
            <div className="flex justify-between">
                <Fiabesco />
                <div className="grid grid-cols-2 gap-4">
                    {footerLinks.map((link) => (
                        <Link to={link.path}>{link.text}</Link>
                    ))}
                </div>
            </div>
            <p className="row-start-4 text-text-primary">
                © {new Date().getFullYear()} fiabesco
            </p>
        </footer>
    )
}
export default Footer
