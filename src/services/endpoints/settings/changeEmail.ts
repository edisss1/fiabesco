import { api } from "../../api"

export const changeEmail = async (email: string) => {
    if (email.trim() === "") return

    try {
        const res = await api.put("/settings/email", { email })

        return res.data
    } catch (error) {
        throw error
    }
}
