import { z } from "zod";

export const SERVICES = ["Day Care", "Overnight Care", "Travel Nanny"] as const;

export const inquirySchema = z.object({
  client_name: z.string().trim().min(2, "Please enter your name").max(100),
  phone_number: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s-]/g, ""))
    .pipe(z.string().regex(/^\+?\d{9,15}$/, "Enter a valid phone number")),
  service_type: z.enum(SERVICES, { errorMap: () => ({ message: "Choose a service" }) }),
  start_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional().or(z.literal("")),
  location: z.string().trim().min(2, "Where do you need care?").max(150),
  notes: z.string().trim().max(1000).optional(),
  website: z.string().max(0).optional(), // honeypot
});
export type InquiryInput = z.infer<typeof inquirySchema>;
