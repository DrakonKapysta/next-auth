import { NextResponse } from "next/server";

export async function GET() {
  return new Response(null, {
    status: 200,
    headers: new Headers([
      [
        "Set-Cookie",
        "accessToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      ],
      [
        "Set-Cookie",
        "refreshToken=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT",
      ],
    ]),
  });
}

export async function POST(request: Request) {
  //   const cookies = request.headers.get("cookie") || "";
  const requestData = await request.json();

  const respose = await fetch("http://localhost:3001/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      //   Cookie: cookies,
    },
    credentials: "include",
    body: JSON.stringify(requestData),
  });
  const user = await respose.json();
  return NextResponse.json(user, { headers: respose.headers });

  //   return NextResponse.json(user, { headers: respose.headers });

  //   const cookieHeader = respose.headers.getSetCookie();
  //   //   const cookieHeader = respose.headers.get("set-cookie");
  //   const nextResponse = NextResponse.json(user);
  //   if (cookieHeader) {
  //     for (const cookie of cookieHeader) {
  //       nextResponse.headers.append("Set-Cookie", cookie);
  //     }
  //     // nextResponse.headers.append("Set-Cookie", cookieHeader);
  //     console.log("NextResponse", nextResponse.cookies);
  //   }

  //   return nextResponse;
}
