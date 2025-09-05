"use server";

import * as z from "zod";
import { sendEmail } from "@/lib/email";

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

  const { name, email, subject, message } = validatedFields.data;
  
  try {
    await sendEmail({
      to: "info@keakeo.co.za",
      cc: "dmphala@keakeo.co.za",
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send email:", error);
    return { success: false, error: "Failed to send message. Please try again later." };
  }
}