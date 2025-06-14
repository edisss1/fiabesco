import { Portfolio } from "../../types/Portfolio"

interface PortfolioContactDescProps {
    contactInfo: Portfolio["contactInfo"]
}

const PortfolioContactDesc = ({ contactInfo }: PortfolioContactDescProps) => {
    return (
        <div className="flex flex-col justify-start gap-4 max-w-[300px]">
            <h3 className="text-[2rem] font-bold">Let's work together</h3>
            <p>
                Have a project, idea, or collaboration in mind? I’m always open
                to working with inspiring people. Use the form below to reach
                out — I’d love to hear what you're thinking.
            </p>
        </div>
    )
}
export default PortfolioContactDesc
