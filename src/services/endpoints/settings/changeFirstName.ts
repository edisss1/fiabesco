import { api } from "../../api"

export const changeFirstName = async (firstName: string) => {
    if (firstName.trim() === "") return

    try {
        const res = await api.put("/settings/firstname", { firstName })

        return res.data
    } catch (error) {
        console.error(error)
    }
}
