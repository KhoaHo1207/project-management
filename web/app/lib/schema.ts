import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email("Invaliad Email Address"),
  password: z.string().min(6, "Password must be at least 8 characters"),
});

export const signUpSchema = z
  .object({
    email: z.string().email("Invalid Email Address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    name: z.string().min(3, "Name must be at least 3 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password and Confirm Password do not match",
  });
