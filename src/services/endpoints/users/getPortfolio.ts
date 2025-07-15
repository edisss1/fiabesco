import { Portfolio } from "../../../types/Portfolio"
import { api } from "../../api"

export const getPortfolio = async (userID: string | undefined) => {
    if (!userID) return
    try {
        const res = await api.get(`/portfolios/${userID}`)

        const portfolio = res.data as Portfolio

        return portfolio
    } catch (error) {
        console.error(error)
    }
}
