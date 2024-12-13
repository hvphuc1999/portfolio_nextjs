import { transporter } from "@/lib/mailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email = "", firstName = "", lastName = "", phone = "", message = "" } =
      await req.json();

    await transporter.sendMail({
      to: process.env.EMAIL,
      from: process.env.EMAIL,
      replyTo: email,
      subject: "Let's work together",
      html: `<p>${message}</p><p>First name: ${firstName}</p><p>Last name: ${lastName}</p><p>Phone number: ${phone}</p><p>Email: ${email}</p>`,
    });

    return NextResponse.json({ message: "" }, { status: 201 });
  } catch (err: unknown) {
    return NextResponse.json(
      { message: (err as Error).message },
      { status: 500 }
    );
  }
}
