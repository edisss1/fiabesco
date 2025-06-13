import { createSlice } from "@reduxjs/toolkit"
import { Portfolio } from "../../types/Portfolio"

interface PortfolioState {
    portfolioData: Portfolio | null
}

const initialState: PortfolioState = {
    portfolioData: null
}

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        setPortfolioData: (state, action) => {
            state.portfolioData = action.payload
        }
    }
})

export const { setPortfolioData } = portfolioSlice.actions
export default portfolioSlice.reducer
