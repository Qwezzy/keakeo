"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    return { success: false, error: "Invalid fields." };
  }

  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just simulate a successful submission.
  console.log("Received contact form submission:", validatedFields.data);
  
  await new Promise(resolve => setTimeout(resolve, 1000));

  return { success: true };
}
