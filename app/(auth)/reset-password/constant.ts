import * as z from "zod";


export const formSchema = z.object({
    email: z.string().min(2, {
        message: "You’ve entered an Incorrect email address",
    }),

})