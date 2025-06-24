import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Portfolio } from "../../types/Portfolio"
import { RootState } from "../store"
import { api } from "../../services/api"

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
        allowEmails: false,
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
        allowEmails: false,
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

export const createPortfolio = createAsyncThunk(
    "portfolio/createPortfolio",
    async (userID: string | undefined, { getState, rejectWithValue }) => {
        if (!userID) return
        try {
            const state = getState() as RootState
            const originalPortfolio = state.portfolio.portfolioData

            const formData = new FormData()
            const projectsWithImages = originalPortfolio.projects.map(
                (project: Portfolio["projects"][0], index) => {
                    if (project.img instanceof File) {
                        formData.append(`project-img-${index}`, project.img)
                        return {
                            ...project,
                            img: ""
                        }
                    }
                    return project
                }
            )

            const portfolio = {
                ...originalPortfolio,
                projects: projectsWithImages
            }

            formData.append("portfolio", JSON.stringify(portfolio))

            const res = await api.post(
                `/portfolios/${userID}/create`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            )
            console.log(res.data)
            return res.data
        } catch (err: any) {
            return rejectWithValue(err.response.data || "Upload failed")
        }
    }
)

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
        },
        updateAllowEmails: (state, action: PayloadAction<boolean>) => {
            state.portfolioData.allowEmails = action.payload
        },
        updateSocialLinks: (
            state,
            action: PayloadAction<{
                field: keyof Portfolio["contactInfo"]
                value: string
            }>
        ) => {
            const { field, value } = action.payload
            state.portfolioData.contactInfo[field] = value
        }
    }
})

export const {
    setPortfolioData,
    updateAbout,
    addProject,
    updatePrimaryColor,
    updateTextColor,
    updateBgColor,
    updateAllowEmails,
    updateSocialLinks
} = portfolioSlice.actions
export default portfolioSlice.reducer
