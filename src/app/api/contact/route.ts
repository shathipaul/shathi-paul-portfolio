import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { envConfig } from "@/configs/envConfig";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: envConfig.EMAIL_USER,
        pass: envConfig.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: envConfig.EMAIL_USER,
      to: envConfig.EMAIL_USER,
      replyTo: email,
      cc: "shathi@hashtagshathi.com",
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.error("Send email error:", error);
    return NextResponse.json({ message: "Email send failed" }, { status: 500 });
  }
}
