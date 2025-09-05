"use server";

import nodemailer from "nodemailer";

interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html: string;
  replyTo?: string;
  cc?: string;
}

export async function sendEmail(options: EmailOptions) {
  let transporter;

  if (process.env.NODE_ENV === "production" && process.env.SMTP_HOST) {
    // Production: Use real SMTP credentials
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: (process.env.SMTP_SECURE || 'true') === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  } else {
    // Development: Use Ethereal to preview emails
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    console.log("****************************************************");
    console.log("Development Email Configuration:");
    console.log("Using Ethereal for email previews.");
    console.log(`User: ${testAccount.user}`);
    console.log(`Password: ${testAccount.pass}`);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl({
        from: options.from,
        to: options.to,
        subject: options.subject,
    }));
    console.log("****************************************************");
    
    transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
  }

  const mailOptions = {
    from: options.from,
    to: options.to,
    cc: options.cc,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    if (process.env.NODE_ENV !== "production") {
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Could not send email.");
  }
}