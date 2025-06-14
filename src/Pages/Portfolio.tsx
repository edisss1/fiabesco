import { FormEvent } from "react"
import PageWrapper from "../components/atoms/PageWrapper"
import PortfolioMain from "../components/atoms/PortfolioMain"
import PortfolioProjectCard from "../components/atoms/PortfolioProjectCard"
import PortfolioAboutSection from "../components/molecules/PortfolioAboutDisplay"
import PortfolioContactForm from "../components/molecules/PortfolioContactForm"
import PortfolioFallback from "../components/molecules/PortfolioFallback"
import PortfolioProjects from "../components/molecules/PortfolioProjects"
import PortfolioNav from "../components/organisms/PortfolioNav"
import PortfolioContactDesc from "../components/molecules/PortfolioContactDesc"

const Portfolio = () => {
    let portfolio: boolean = false

    if (portfolio) {
        return (
            <PageWrapper headerEnabled header="Portfolio">
                <PortfolioFallback />
            </PageWrapper>
        )
    }

    const mockProjects: Array<
        React.ComponentProps<typeof PortfolioProjectCard>["project"]
    > = Array(15).fill({
        img: "https://via.placeholder.com/150",
        title: "This is a mock project",
        link: "https://via.placeholder.com/150"
    })

    const mockContactInfo: React.ComponentProps<
        typeof PortfolioContactDesc
    >["contactInfo"] = {
        email: "johndoe@example.com",
        behanceProfileLink: "https://www.behance.net/johndoe",
        dribbbleProfileLink: "https://dribbble.com/johndoe",
        pinterestProfileLink: "https://www.pinterest.com/johndoe/",
        artStationProfileLink: "https://www.artstation.com/johndoe"
    }

    const mockSubmit = (e: FormEvent) => {
        e.preventDefault()
        alert("Form submitted")
    }

    return (
        <>
            <PageWrapper sidebarEnabled={false}>
                <PortfolioNav />
                <PortfolioMain>
                    <PortfolioAboutSection
                        userName="John Doe"
                        aboutText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem iure expedita error ea! Eum architecto harum modi corporis dolor perspiciatis dolores, asperiores veniam repellat iusto nostrum, officiis possimus, natus id saepe deserunt illum placeat! Laboriosam recusandae ullam nostrum, voluptatibus adipisci laudantium nemo corrupti. Perspiciatis repellendus exercitationem libero autem cumque. Sint nobis hic totam non ullam accusamus labore nisi autem recusandae accusantium unde perferendis, vero ad quod quidem ipsam! Qui ratione et eveniet nemo eaque odit deserunt accusamus asperiores tenetur"
                    />
                    <PortfolioProjects projects={mockProjects} />
                    <div className="flex items-start w-full max-w-[800px] flex-wrap justify-between mx-auto ">
                        <PortfolioContactDesc contactInfo={mockContactInfo} />
                        <PortfolioContactForm onSubmit={mockSubmit} />
                    </div>
                </PortfolioMain>
            </PageWrapper>
        </>
    )
}
export default Portfolio
