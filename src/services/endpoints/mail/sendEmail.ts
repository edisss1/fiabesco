import { api } from "../../api"

export const sendEmail = async (
    name: string,
    email: string,
    subject: string,
    message: string,
    toEmail: string
) => {
    if (
        email.trim() === "" ||
        message.trim() === "" ||
        name.trim() === "" ||
        subject.trim() === ""
    ) {
        return
    }

    const emailObj = {
        fromEmail: email,
        fromUserName: name,
        toEmail: toEmail,
        subject: subject,
        body: message
    }

    const res = await api.post("emails/send", emailObj)

    return res.data
}
