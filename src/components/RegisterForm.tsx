"use client";

import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

export function RegisterForm() {
  const { sessionRegisterByEmail } = useAuth();
  const router = useRouter();
  const handleSumbit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    sessionRegisterByEmail(email as string, password as string);
    router.push("/dashboard");
  };
  return (
    <form onSubmit={handleSumbit} className="flex max-w-[300px] flex-col gap-2">
      <div className="flex flex-col gap-2">
        <input id="email" name="email" placeholder="Email" />
      </div>
      <div className="flex flex-col gap-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
