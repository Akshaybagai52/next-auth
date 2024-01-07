"use server"
import * as z from 'zod';
import { LoginSchema } from "@/schema";

export const Login = async (values: z.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if(!validatedFields.success) {
        return { error: "Invalida Fields" }
    }
    return { success: "Email Sent"}
}