import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

export default function Home() {
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
            href="journal/logging"
          >
            Journal
          </Link>
          <Link
            className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
            href="journal/analytics"
          >
            Analytics
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Track your mood. Find your peace.
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Mood Echo is your personal mental health companion. Log your
                emotions, gain insights, connect with therapists, and join a
                supportive community.
              </p>
            </div>
            <div className="mx-auto grid max-w-sm items-start gap-2">
              <form className="grid gap-2">
                <Input
                  className="w-full max-w-[300px]"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Mood Echo. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
