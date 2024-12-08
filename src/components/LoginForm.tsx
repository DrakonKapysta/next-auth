"use client";

import { useAuth } from "@/context/AuthProvider";

export function LoginForm() {
  const { sessionLoginEmail } = useAuth();
  const handleSumbing = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    sessionLoginEmail(email as string, password as string);
  };
  return (
    <form
      onSubmit={handleSumbing}
      className="flex max-w-[300px] flex-col gap-2"
    >
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
      <button type="submit">Login</button>
    </form>
  );
}
