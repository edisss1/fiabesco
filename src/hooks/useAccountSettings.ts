import { useMutation, useQueryClient } from "@tanstack/react-query"
import { changeFirstName } from "../services/endpoints/settings/changeFirstName"
import { changeLastName } from "../services/endpoints/settings/changeLastName"
import { changeEmail } from "../services/endpoints/settings/changeEmail"
import { changeHandle } from "../services/endpoints/settings/changeHandle"
import { FormEvent, useState } from "react"

type ErrorState = {
    firstName: string | null
    lastName: string | null
    email: string | null
    handle: string | null
}

export function useAccountSettings(
    firstName: string,
    lastName: string,
    email: string,
    handle: string
) {
    const client = useQueryClient()
    // const [error, setError] = useState<string | null>("")

    const [errors, setErrors] = useState<ErrorState>({
        firstName: null,
        lastName: null,
        email: null,
        handle: null
    })

    const { mutate: updateFirstName } = useMutation({
        mutationKey: ["updateFirstName"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            await changeFirstName(firstName)
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["userData"] })
            setErrors((prev) => ({ ...prev, firstName: null }))
        },
        onError: (error: any) => {
            setErrors((prev) => ({
                ...prev,
                firstName: error.response.data.error
            }))
        }
    })

    const { mutate: updateLastName } = useMutation({
        mutationKey: ["updateLastName"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            await changeLastName(lastName)
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["userData"] })
            setErrors((prev) => ({ ...prev, lastName: null }))
        },
        onError: (error: any) => {
            setErrors((prev) => ({
                ...prev,
                lastName: error.response.data.error
            }))
        }
    })

    const { mutate: updateEmail } = useMutation({
        mutationKey: ["updateEmail"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            await changeEmail(email)
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["userData"] })
            setErrors((prev) => ({ ...prev, email: null }))
        },
        onError: (error: any) => {
            setErrors((prev) => ({
                ...prev,
                email: error.response.data.error
            }))
        }
    })

    const { mutate: updateHandle } = useMutation({
        mutationKey: ["updateHandle"],
        mutationFn: async (e: FormEvent) => {
            e.preventDefault()
            await changeHandle(handle)
        },
        onSuccess: () => {
            client.invalidateQueries({ queryKey: ["userData"] })
            setErrors((prev) => ({ ...prev, handle: null }))
        },
        onError: (error: any) => {
            setErrors((prev) => ({
                ...prev,
                handle: error.response.data.error
            }))
        }
    })

    return {
        updateFirstName,
        updateLastName,
        updateEmail,
        updateHandle,
        errors
    }
}
