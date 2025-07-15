import PageWrapper from "../components/atoms/PageWrapper"
import PortfolioMain from "../components/atoms/PortfolioMain"
import PortfolioAboutSection from "../components/molecules/PortfolioAboutDisplay"
import PortfolioContactForm from "../components/molecules/PortfolioContactForm"
import PortfolioFallback from "../components/molecules/PortfolioFallback"
import PortfolioProjects from "../components/molecules/PortfolioProjects"
import PortfolioNav from "../components/organisms/PortfolioNav"
import PortfolioContactDesc from "../components/molecules/PortfolioContactDesc"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Suspense } from "react"
import Loading from "../components/atoms/Loading"
import { Portfolio as IPortfolio } from "../types/Portfolio"
import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { getPortfolio } from "../services/endpoints/users/getPortfolio"

const Portfolio = () => {
    const { userID } = useParams()
    const { user: currentUser } = useSelector((state: RootState) => state.auth)
    const { data: portfolio, isFetching } = useQuery<IPortfolio | undefined>({
        queryKey: ["portfolio", userID],
        queryFn: () => getPortfolio(userID),
        refetchOnWindowFocus: false
    })

    const isOwner = userID === currentUser?._id
    console.log(isOwner)

    if (isFetching) {
        return <Loading />
    } else if (!portfolio) {
        return (
            <PageWrapper sidebarEnabled>
                {isOwner ? (
                    <PortfolioFallback />
                ) : (
                    <div className="text-center text-text-primary m-auto">
                        <h2 className="text-2xl font-semibold">
                            This user doesn't have a portfolio yet
                        </h2>
                    </div>
                )}
            </PageWrapper>
        )
    }

    return (
        <Suspense fallback={<Loading />}>
            <PageWrapper
                background={portfolio.appearance.bgColor}
                sidebarEnabled={false}
            >
                <PortfolioNav />
                <PortfolioMain>
                    <PortfolioAboutSection
                        textColor={portfolio.appearance.textColor}
                        userName={portfolio.userName}
                        aboutText={portfolio.about}
                    />
                    <div className="flex flex-col items-center gap-9  mx-auto">
                        <PortfolioProjects
                            textColor={portfolio.appearance.textColor}
                            projects={portfolio.projects}
                        />
                        <div className="flex items-start w-full gap-9 flex-wrap  justify-between mx-auto ">
                            <PortfolioContactDesc
                                textColor={portfolio.appearance.textColor}
                                contactInfo={portfolio.contactInfo}
                            />
                            <PortfolioContactForm
                                primaryColor={portfolio.appearance.primaryColor}
                                textColor={portfolio.appearance.textColor}
                                onSubmit={(e) => console.log(e)}
                            />
                        </div>
                    </div>
                </PortfolioMain>
            </PageWrapper>
        </Suspense>
    )
}
export default Portfolio
