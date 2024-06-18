// import type { NextRequest } from 'next/server'

// import { NextRequest, NextResponse } from "next/server";

 
// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('currentUser')?.value
 
//   if (currentUser && !request.nextUrl.pathname.startsWith('/dashboard')) {
//     return Response.redirect(new URL('/dashboard', request.url))
//   }
 
//   if (!currentUser && !request.nextUrl.pathname.startsWith('/register')) {
//     return Response.redirect(new URL('/register', request.url))
//   }
// }
 
// export const config = {
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }

// export const middleware = function (request : NextRequest)
// {
//   if(request.nextUrl.pathname.startsWith("/")){
//   request.cookies.get("accessToken") && request.cookies.get("role")?.value === "admin"
//   }{
//   return NextResponse.redirect(new URL("/admin" , request.url))
//   }
// }


import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith('/dashboard')) {
    const authCookie = req.cookies.get('role')?.value;
    if (authCookie !== 'admin') {
      return NextResponse.redirect(new URL('/register', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '//:path*'],
};
