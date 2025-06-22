import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Portfolio } from "../../types/Portfolio"

interface PortfolioState {
    portfolioData: Portfolio
    initialData: Portfolio
    status: "loading" | "idle" | "error"
    error: string | null
}

const initialState: PortfolioState = {
    portfolioData: {
        userID: "",
        about: "",
        projects: [], // ✅ important!
        appearance: {
            textColor: "",
            bgColor: "",
            primaryColor: ""
        },
        contactInfo: {
            email: "",
            behanceProfileLink: "",
            dribbbleProfileLink: "",
            pinterestProfileLink: "",
            artStationProfileLink: ""
        }
    },
    initialData: {
        userID: "",
        about: "",
        projects: [], // ✅ important here too
        appearance: {
            textColor: "",
            bgColor: "",
            primaryColor: ""
        },
        contactInfo: {
            email: "",
            behanceProfileLink: "",
            dribbbleProfileLink: "",
            pinterestProfileLink: "",
            artStationProfileLink: ""
        }
    },
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

export const {
    setPortfolioData,
    updateAbout,
    addProject,
    updateAppearance,
    updateContactInfo
} = portfolioSlice.actions
export default portfolioSlice.reducer
