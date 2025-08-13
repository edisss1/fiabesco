import { PasswordStrength } from "../types/PasswordStrength"

export function checkPasswordStrength(password: string): PasswordStrength {
    const passwordStrength: PasswordStrength = {
        longEnough: false,
        hasNumber: false,
        hasSpecialChar: false
    }

    if (password.length >= 10) {
        passwordStrength.longEnough = true
    }

    if (/[0-9]/.test(password)) {
        passwordStrength.hasNumber = true
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        passwordStrength.hasSpecialChar = true
    }

    return passwordStrength
}
