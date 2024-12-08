"use client";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import React from "react";

export default function Dashboard() {
  const { session, logout } = useAuth();
  return (
    <div className="flex flex-col h-full bg-slate-200 items-center justify-center relative">
      <div className="absolute top-4 left-4">
        <Link href="/">Home</Link>
      </div>
      <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
      {session && <p className="text-2xl">{session.email}</p>}
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}
