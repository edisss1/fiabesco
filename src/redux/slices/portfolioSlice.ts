import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Portfolio } from "../../types/Portfolio"

interface PortfolioState {
    portfolioData: Portfolio
    initialData: Portfolio
    status: "loading" | "idle" | "error"
    error: string | null
}

const initialState: PortfolioState = {
    portfolioData: {} as Portfolio,
    initialData: {} as Portfolio,
    status: "idle",
    error: null
}

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {
        setPortfolioData: (state, action) => {
            state.portfolioData = action.payload
        },
        updateAbout: (state, action: PayloadAction<Portfolio["about"]>) => {
            state.portfolioData.about = action.payload
        },
        updateProjects: (
            state,
            action: PayloadAction<Portfolio["projects"]>
        ) => {
            state.portfolioData.projects = action.payload
        },
        addProject: (
            state,
            action: PayloadAction<Portfolio["projects"][0]>
        ) => {
            state.portfolioData.projects.push(action.payload)
        },
        updateAppearance: (
            state,
            action: PayloadAction<Portfolio["appearance"]>
        ) => {
            state.portfolioData.appearance = action.payload
        },
        updateContactInfo: (
            state,
            action: PayloadAction<Portfolio["contactInfo"]>
        ) => {
            state.portfolioData.contactInfo = action.payload
        }
    }
})

export const { setPortfolioData } = portfolioSlice.actions
export default portfolioSlice.reducer
