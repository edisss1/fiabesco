export const compactNumber = (num: number | undefined) => {
    if (num === undefined) return
    const formatter = Intl.NumberFormat("en", { notation: "compact" })
    return formatter.format(num)
}
