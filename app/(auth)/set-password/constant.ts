import * as z from "zod";


export const formSchema = z.object({

    password: z.string().min(1, {
        message: "Password is required",
    }),

    confirmPassword: z.string().min(1, {
        message: "Confirm password is required",
    }),

})