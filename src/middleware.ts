import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SITE_PASSWORD = 'leforge2026';
const COOKIE_NAME = 'leforge_preview_access';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Allow access to static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like .ico, .png, etc.
  ) {
    return NextResponse.next();
  }
  
  // Check for preview access cookie
  const hasAccess = request.cookies.get(COOKIE_NAME)?.value === 'true';
  
  if (hasAccess) {
    return NextResponse.next();
  }
  
  // Check if this is a password submission
  if (request.method === 'POST' && pathname === '/api/preview-access') {
    return NextResponse.next();
  }
  
  // Redirect to gate page if not on root
  if (pathname !== '/') {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
