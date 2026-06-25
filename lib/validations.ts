import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters").max(200),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export const franchiseSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number").max(25),
  country: z.string().min(2, "Please select your country"),
  city: z.string().min(2, "City must be at least 2 characters").max(100),
  investmentBudget: z.enum(
    ["under-30k", "30k-60k", "60k-100k", "100k-200k", "200k-plus", "to-discuss"]
  ),
  message: z.string().max(2000).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
export type FranchiseFormValues = z.infer<typeof franchiseSchema>;
export type NewsletterFormValues = z.infer<typeof newsletterSchema>;
