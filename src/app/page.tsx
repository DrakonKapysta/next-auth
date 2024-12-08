import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-full bg-slate-200 items-center justify-center">
      <h1 className="text-4xl font-bold mb-2">Next Auth</h1>
      <div className="flex gap-2">
        <Link
          className="p-2 border-2 rounded-md border-green-400 bg-purple-200"
          href={"/login"}
        >
          Login
        </Link>
        <Link
          className="p-2 border-2 rounded-md border-green-400 bg-purple-200"
          href={"/register"}
        >
          Register
        </Link>
        <Link
          className="p-2 border-2 rounded-md border-green-400 bg-purple-200"
          href={"/dashboard"}
        >
          Dashboard
        </Link>
      </div>
    </div>
  );
}
