import { useMutation, useQueryClient } from "@tanstack/react-query"
import { changeFirstName } from "../services/endpoints/settings/changeFirstName"
import { changeLastName } from "../services/endpoints/settings/changeLastName"
import { changeEmail } from "../services/endpoints/settings/changeEmail"
import { changeHandle } from "../services/endpoints/settings/changeHandle"
import { FormEvent } from "react"

export function useAccountSettings(
    firstName: string,
    lastName: string,
    email: string,
    handle: string
) {
    const client = useQueryClient()

    const { mutate: updateFirstName } = useMutation({
        mutationKey: ["updateFirstName"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            await changeFirstName(firstName)
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["userData"] })
    })

    const { mutate: updateLastName } = useMutation({
        mutationKey: ["updateLastName"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            await changeLastName(lastName)
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["userData"] })
    })

    const { mutate: updateEmail } = useMutation({
        mutationKey: ["updateEmail"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            await changeEmail(email)
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["userData"] })
    })

    const { mutate: updateHandle } = useMutation({
        mutationKey: ["updateHandle"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            await changeHandle(handle)
        },
        onSuccess: () => client.invalidateQueries({ queryKey: ["userData"] })
    })

    return { updateFirstName, updateLastName, updateEmail, updateHandle }
}
