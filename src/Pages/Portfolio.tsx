import PageWrapper from "../components/atoms/PageWrapper"
import PortfolioHeader from "../components/atoms/PortfolioHeader"
import PortfolioMain from "../components/atoms/PortfolioMain"
import PortfolioProjectCard from "../components/atoms/PortfolioProjectCard"
import PortfolioAboutSection from "../components/molecules/PortfolioAboutDisplay"
import PortfolioFallback from "../components/molecules/PortfolioFallback"
import PortfolioProjects from "../components/molecules/PortfolioProjects"
import PortfolioNav from "../components/organisms/PortfolioNav"

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
                </PortfolioMain>
            </PageWrapper>
        </>
    )
}
export default Portfolio
