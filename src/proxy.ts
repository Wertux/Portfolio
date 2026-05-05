import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  PROTECTED_SLUGS,
  verifyToken,
  isCodeValid,
  COOKIE_NAME,
} from "@/lib/project-access";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const match = pathname.match(/^\/projects\/([^/]+)/);
  if (!match) return NextResponse.next();

  const slug = match[1];
  if (!PROTECTED_SLUGS.includes(slug)) return NextResponse.next();

  const token = request.cookies.get(COOKIE_NAME)?.value;
  if (token) {
    const code = await verifyToken(token);
    if (code && isCodeValid(code)) return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/unlock";
  url.searchParams.set("for", slug);
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/projects/:slug*"],
};
