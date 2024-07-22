import * as z from "zod";


export const formSchema = z.object({
    email: z.string().min(2, {
        message: "You’ve entered an Incorrect email address",
    }),
    password: z.string().min(1, {
        message: "Password is required",
    }),
})