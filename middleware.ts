import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('authToken')?.value;
  const { pathname } = request.nextUrl;

  if (!isLoggedIn && pathname === '/') {
    return null;
  } else if (!isLoggedIn && pathname !== '/login') {
    return NextResponse.redirect(new URL('/login',request.url))
  } else if (isLoggedIn && pathname === '/login') {
    if (typeof window !== 'undefined') {
        window.location.replace('/my-notes');
    }
    return NextResponse.redirect(new URL("/my-notes", request.url))
  }
  return null;
}

export const config = {
  matcher: [
    "/",
    "/login",
    "/my-notes"
  ]
}