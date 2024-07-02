import { NextRequest, NextResponse } from "next/server";
import { routes } from "./constant/routes";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith(`${routes.dashboard}`)) {
    const authCookie = req.cookies.get("role")?.value;
    if (authCookie !== "admin") {
      return NextResponse.redirect(new URL(`${routes.register}`, req.url));
    }
  } else if (pathname.startsWith(`${routes.checkout}`)) {
    const authCookie = req.cookies.get("role")?.value;
    if (authCookie !== "user") {
      return NextResponse.redirect(new URL(`${routes.register}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [`${routes.dashboard}/:path*`, `${routes.checkout}/:path*`],
};
