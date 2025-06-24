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
        projects: [],
        appearance: {
            textColor: "#333333",
            bgColor: "#F9F9F9",
            primaryColor: "#F8D57E"
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
        projects: [],
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

        updateContactInfo: (
            state,
            action: PayloadAction<Portfolio["contactInfo"]>
        ) => {
            state.portfolioData.contactInfo = action.payload
        },
        updatePrimaryColor: (
            state,
            action: PayloadAction<Portfolio["appearance"]["primaryColor"]>
        ) => {
            state.portfolioData.appearance.primaryColor = action.payload
        },
        updateTextColor: (
            state,
            action: PayloadAction<Portfolio["appearance"]["textColor"]>
        ) => {
            state.portfolioData.appearance.textColor = action.payload
        },
        updateBgColor: (
            state,
            action: PayloadAction<Portfolio["appearance"]["bgColor"]>
        ) => {
            state.portfolioData.appearance.bgColor = action.payload
        }
    }
})

export const {
    setPortfolioData,
    updateAbout,
    addProject,
    updateContactInfo,
    updatePrimaryColor,
    updateTextColor,
    updateBgColor
} = portfolioSlice.actions
export default portfolioSlice.reducer
