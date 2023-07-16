import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware"; //Bunu yazarsak next-auth, bütün pagelere ve routelara[tüm applikasyona] etki edecektir.

export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "")
    return NextResponse.redirect(new URL("/home", request.url));
  return NextResponse.next();
}
export const config = {
  //Böyle yazarsak next-auth, sadece bizim belirlediğimiz routelara etki edecektir.
  matcher: ["/:path*"],
};
