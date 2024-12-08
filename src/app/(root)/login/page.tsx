import { LoginForm } from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

export default function Login() {
  return (
    <div className="flex flex-col h-full bg-slate-200 items-center justify-center relative">
      <div className="absolute top-4 left-4">
        <Link href="/">Home</Link>
      </div>
      <h1 className="text-4xl font-bold mb-2">Login Page</h1>
      <LoginForm />
    </div>
  );
}
