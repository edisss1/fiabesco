import { api } from "../../api"

export const changeHandle = async (handle: string) => {
    if (handle.trim() === "") return

    try {
        const res = await api.put("/settings/handle", { handle })

        return res.data
    } catch (error) {
        throw error
    }
}
