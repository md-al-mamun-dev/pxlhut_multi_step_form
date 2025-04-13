import { z } from "zod"

export const PersonalInformationSchema = z.object({
        fullName: z.string().min( 1, { message: "Name is required" }),
        email: z.string().email({ message: "Invalid email address" }),
        phoneNumber: z.string().min(10, { message: "Phone number must be at least 10 digits" })
                                .max(11, { message: "Phone number must be at most 11 digits" })
                                .regex(/^\d+$/, { message: "Phone number must be digits only" }),
    })
export default PersonalInformationSchema