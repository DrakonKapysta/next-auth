import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const requestData = await request.json();
  const respose = await fetch("http://localhost:3001/api/registration", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(requestData),
  });
  const user = await respose.json();
  return NextResponse.json(user, { headers: respose.headers });
}
