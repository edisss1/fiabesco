import { api } from "../../api"

export const changeLastName = async (lastName: string) => {
    if (lastName.trim() === "") return

    try {
        const res = await api.put("/settings/lastname", { lastName })

        return res.data
    } catch (error) {
        console.error(error)
    }
}
