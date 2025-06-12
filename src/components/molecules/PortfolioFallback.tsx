import SuitcaseIcon from "../../assets/SuitcaseIcon"
import Link from "../atoms/Link"

const PortfolioFallback = () => {
    return (
        <div className="grid gap-6 place-items-center mx-auto mt-16 w-full max-w-[500px]">
            <SuitcaseIcon />
            <p className="text-center">
                Hey there! It looks like your portfolio is still a blank canvas.
                But don't worry — we’re here to help you paint your masterpiece.
                Start building it now — it’s quick, easy, and totally free!
            </p>
            <Link
                variant="secondary"
                variantEnabled
                path="/app/create-portfolio"
            >
                Start building it now!
            </Link>
        </div>
    )
}
export default PortfolioFallback
