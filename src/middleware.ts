import { NextRequest, NextResponse } from 'next/server';
import { routes } from './context/routes';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith(`${routes.dashboard}`)) {
    const authCookie = req.cookies.get('role')?.value;
    if (authCookie !== 'admin') {
      return NextResponse.redirect(new URL(`${routes.register}`, req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [`${routes.dashboard}/:path*`],
};
