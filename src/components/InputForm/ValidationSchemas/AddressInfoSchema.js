import { z } from "zod";
export const AddressInfoSchema = z.object({
        streetAddress: z.string().min( 1, { message: "Street Address is required" }),
        city: z.string().min( 1, { message: "City is required" }),
        zipCode: z.string().min(4, { message: "Zip Code must be at least 4 digits" })
                                .regex(/^\d+$/, { message: "Zip Code must be digits only" }),
    })
export default AddressInfoSchema