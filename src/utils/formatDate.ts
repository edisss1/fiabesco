export const formatDate = (date: string) => {
    const parsedDate = new Date(date)

    const hours = parsedDate.getHours().toString().padStart(2, "0")
    const minutes = parsedDate.getMinutes()
    const time = `${hours}:${minutes}`

    return time
}
