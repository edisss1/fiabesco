export const formatRelativeDate = (date: string) => {
    const parsedDate = new Date(date)

    const hours = parsedDate.getHours()
    const minutes = parsedDate.getMinutes()
    const time = `${hours}:${minutes}`

    return time
}
