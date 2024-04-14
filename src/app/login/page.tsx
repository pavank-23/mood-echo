"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { UserMetadata } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Component() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<UserMetadata | null>(null);

  const supabase = createClient();
  async function signIn(emailx: string, passwordx: string) {
    console.log(emailx, passwordx);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailx,
      password: passwordx,
    });
    setEmail("");
    setPassword("");
    if (data) return data;
    if (error) return error;
  }
  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    setUser(user!);
  }

  async function handleSubmit() {
    const res = await signIn(email, password);
    console.log(res);
    await getUser();

    if (user) {
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  }

  return (
    <div className="">
      {user && (
        <Alert>
          <AlertDescription>
            You are signed in. Redirecting....
          </AlertDescription>
        </Alert>
      )}

      <div className="mx-auto max-w-[400px] space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="example@example.com"
            value={email}
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
          Sign In
        </Button>
      </div>
      <div className="text-center text-sm p-2">
        <Link className="underline" href="#">
          Forgot your password?
        </Link>
      </div>
    </div>
  );
}
