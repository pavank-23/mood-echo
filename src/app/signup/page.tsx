"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { UserMetadata } from "@supabase/supabase-js";

export default function Component() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<UserMetadata | null>(null);

  const supabase = createClient();
  async function signUpNewUser(emailx: string, passwordx: string) {
    const { data, error } = await supabase.auth.signUp({
      email: emailx,
      password: passwordx,
      options: {
        emailRedirectTo: "http://localhost:3000/",
      },
    });
    if (data) console.log(data);
    if (error) console.log(error);
    setEmail("");
    setPassword("");
  }

  function handleSubmit() {
    signUpNewUser(email, password);
  }

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="flex items-center gap-4 p-4">
        <Link
          className="flex items-center gap-2 text-lg font-semibold"
          href="/"
        >
          <span>Mood Echo</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4">
          <Link
            className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
            href="/journal/logging"
          >
            Journal
          </Link>
          <Link
            className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
            href="/forums/dashboard"
          >
            Forums
          </Link>
          <Link
            className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
            href="/signup"
          >
            Sign Up
          </Link>
        </nav>
      </header>
      <div className="mx-auto max-w-[400px] space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign Up</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below to sign up for an account
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="example@example.com"
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            value={password}
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button onClick={() => handleSubmit()} className="w-full">
          Sign Up
        </Button>
      </div>
      <div className="text-center text-sm p-2">
        <Link className="underline" href="login">
          Already a user? Sign In
        </Link>
      </div>
      <div className="text-center text-sm p-2">
        <Link className="underline" href="#">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}
