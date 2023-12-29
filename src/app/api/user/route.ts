import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = body;

    // check if email is already in use
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already in use" },
        { status: 409 }
      );
    }

    return NextResponse.json(body);
  } catch (error) {}
}
