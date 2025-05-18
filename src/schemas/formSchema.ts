import { z } from "zod";

export const formSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" })
        .min(2, { message: "Name must be at least 2 characters" }),
    city: z
        .string()
        .regex(/^[a-zA-Z\s\-.]+$/, {
            message:
                "City can only contain letters, spaces, hyphens, and periods",
        })
        .optional()
        .or(z.literal("")),

    state: z
        .string()
        .regex(/^[A-Z]*$/, {
            message: "State must be uppercase letters only",
        })
        .transform((val) => val.toUpperCase())
        .refine((val) => val === "" || val.length === 2, {
            message: "State code must be 2 letters (e.g., CA, NY)",
        })
        .optional()
        .or(z.literal("")),

    phone: z
        .string()
        .min(1, { message: "Phone number is required" })

        .regex(/^\(\d{3}\) \d{3}-\d{4}$/, {
            message: "Please enter a valid phone number: (XXX) XXX-XXXX",
        }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email({ message: "Please enter a valid email address" }),
});

export type FormData = z.infer<typeof formSchema>;
