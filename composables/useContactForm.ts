// composables/contactFormSchema.ts
import { z } from 'zod'

export const contactFormSchema = z.object({
	name: z.string().min(2, 'Name is too short').max(100),
	email: z.string().email('Invalid email'),
	message: z.string().min(5, 'Message too short'),
})

export type ContactForm = z.infer<typeof contactFormSchema>
