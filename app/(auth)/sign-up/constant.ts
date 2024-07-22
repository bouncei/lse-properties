import * as z from "zod";


export const formSchema = z.object({
    fullName: z.string().min(4, {
        message: "Enter a valid full name"
    }),
    email: z.string().min(2, {
        message: "You’ve entered an Incorrect email address",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
    confirmPassword: z.string().min(1, {
        message: "Confirm password is required",
    }),
})