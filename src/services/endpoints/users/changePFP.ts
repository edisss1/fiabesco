import { api } from "../../api"

export const changePFP = async (userID: string | undefined, pfp: File) => {
    try {
        const formData = new FormData()
        formData.append("pfp", pfp)

        const res = await api.put(`/users/${userID}/pfp`, formData, {
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
