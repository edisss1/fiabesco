import { api } from "../services/api"

export const uploadBanner = async (
    userID: string | undefined,
    banner: File
) => {
    if (!userID) return

    try {
        const formData = new FormData()
        formData.append("banner", banner)

        const res = await api.put(`/users/${userID}/banner`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        const data = res.data

        return data
    } catch (error) {
        console.error(error)
    }
}
