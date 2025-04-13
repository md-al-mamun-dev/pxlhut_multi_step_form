import { z } from "zod";

export const AccountInfoSchema = z.object({
        username: z.string().min(4, { message: "Username must be at least 4 letters" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters." }),
        confirmPassword: z.string(),
    }).superRefine(({ password, confirmPassword }, ctx) => {
        if (password !== confirmPassword) {
            ctx.addIssue({
                code: "custom",
                message: "Passwords don't match",
                path: ["confirmPassword"],
            });
        }
    });
export default AccountInfoSchema