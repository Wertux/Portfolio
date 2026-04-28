import { cookies } from "next/headers";
import { isCodeValid, signToken, COOKIE_NAME } from "@/lib/case-study-access";

export async function POST(request: Request) {
  const { code, slug } = await request.json();

  if (typeof code !== "string" || typeof slug !== "string") {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  const normalised = code.trim().toUpperCase();
  if (!isCodeValid(normalised)) {
    return Response.json({ error: "Invalid or expired code" }, { status: 401 });
  }

  const token = await signToken(normalised);
  const cookieStore = await cookies();

  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 90, // 90 days
  });

  return Response.json({ ok: true });
}
