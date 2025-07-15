import { api } from "../../api"

export const downloadUserData = async () => {
    try {
        const res = await api.get("/settings/data")

        const data = res.data

        const jsonString = JSON.stringify(data, null, 2)

        const blob = new Blob([jsonString], { type: "application/json" })

        const url = URL.createObjectURL(blob)

        const link = document.createElement("a")
        link.href = url
        link.download = "data.json"
        link.click()
        link.remove()
        URL.revokeObjectURL(url)
    } catch (error) {
        console.error(error)
    }
}
