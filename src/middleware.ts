import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const token = req.cookies.get("accessToken");

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  console.log(token.value);

  const isValid = await fetch("http://localhost:3001/api/validate-token", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
      Cookie: `accessToken=${token.value};`,
    },
    credentials: "include",
  }).then((res) => res.ok);

  if (!isValid) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
