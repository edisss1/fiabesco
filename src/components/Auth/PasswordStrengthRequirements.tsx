interface PasswordStrengthRequirementsProps {
    longEnough: boolean
    hasNumber: boolean
    hasSpecialChar: boolean
}

const PasswordStrengthRequirements = ({
    longEnough,
    hasNumber,
    hasSpecialChar
}: PasswordStrengthRequirementsProps) => {
    return (
        <div className="flex flex-col gap-1 text-sm">
            <h4 className="">
                Your password has to match the following requirements:
            </h4>
            <ul className="list-disc list-inside">
                <li style={{ color: longEnough ? "green" : "red" }}>
                    Has at least 10 characters
                </li>
                <li style={{ color: hasNumber ? "green" : "red" }}>
                    Has at least 1 number
                </li>
                <li style={{ color: hasSpecialChar ? "green" : "red" }}>
                    Has at least 1 special character
                </li>
            </ul>
        </div>
    )
}
export default PasswordStrengthRequirements
