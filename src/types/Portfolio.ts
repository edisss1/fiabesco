export interface Portfolio {
    _id?: string
    userID: string
    about: string
    projects: PortfolioProject[]
    appearance: PortfolioAppearance
    contactInfo: PortfolioContactInfo
}

interface PortfolioProject {
    img: string
    title: string
    link: string
}

interface PortfolioAppearance {
    textColor: string
    bgColor: string
    primaryColor: string
}

interface PortfolioContactInfo {
    email: string
    behanceProfileLink: string
    dribbbleProfileLink: string
    pinterestProfileLink: string
    artStationProfileLink: string
}
