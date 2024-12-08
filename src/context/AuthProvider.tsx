"use client";
import { UserDTO } from "@/dtos/userDTO";
import React, { FC, useState } from "react";

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  session: UserDTO | null;
  sessionLoginEmail: (email: string, password: string) => Promise<void>;
  sessionRegisterByEmail: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps
);

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [session, setSession] = useState<UserDTO | null>(null);

  const sessionLoginEmail = async (email: string, password: string) => {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    const userData = new UserDTO(data.user);

    localStorage.setItem("user", JSON.stringify(userData));

    setSession(userData);
  };

  const sessionRegisterByEmail = async (email: string, password: string) => {
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    const userData = new UserDTO(data.user);

    localStorage.setItem("user", JSON.stringify(userData));

    setSession(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setSession(null);

    fetch("/api/login", {
      method: "GET",
      credentials: "include",
    });
  };

  return (
    <AuthContext.Provider
      value={{ session, sessionLoginEmail, sessionRegisterByEmail, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
