import PageWrapper from "../components/Layout/PageWrapper"
import PortfolioMain from "../components/Portfolio/PortfolioMain"
import PortfolioAboutSection from "../components/Portfolio/PortfolioAboutDisplay"
import PortfolioContactForm from "../components/Portfolio/PortfolioContactForm"
import PortfolioFallback from "../components/Portfolio/PortfolioFallback"
import PortfolioProjects from "../components/Portfolio/PortfolioProjects"
import PortfolioNav from "../components/Portfolio/PortfolioNav"
import PortfolioContactDesc from "../components/Portfolio/PortfolioContactDesc"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Suspense } from "react"
import Loading from "../components/Common/Loading"
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
                        <div className="flex items-start w-ful max-md:flex-wrap max-md:justify-center gap-9 mx-auto ">
                            <PortfolioContactDesc
                                textColor={portfolio.appearance.textColor}
                                contactInfo={portfolio.contactInfo}
                            />
                            <PortfolioContactForm
                                primaryColor={portfolio.appearance.primaryColor}
                                textColor={portfolio.appearance.textColor}
                                ownerEmail={portfolio.contactInfo.email}
                            />
                        </div>
                    </div>
                </PortfolioMain>
            </PageWrapper>
        </Suspense>
    )
}
export default Portfolio
