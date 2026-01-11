import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import ContactMessage from "@/models/ContactMessage";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, company, projectType, message } = body;

    if (!name || !email || !message) return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });

    await connectDB();

    await ContactMessage.create({
      name,
      email,
      phone,
      company,
      projectType,
      message,
      source: "website",
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    if (process.env.NODE_ENV === "development") console.error("Contact API error:", error);
    return NextResponse.json({ success: false, error: "Failed to submit message" }, { status: 500 });
  }
}
