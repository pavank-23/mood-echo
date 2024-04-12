"use client";

import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="grid grid-rows-[auto 1fr] w-full min-h-screen gap-4 p-4 md:grid-cols-[300px 1fr] md:gap-0">
      <div className="grid grid-rows-[1fr auto] gap-4 md:grid-cols-1 md:grid-rows-1 md:gap-4">
        <div className="flex flex-col gap-2">
          <header className="flex items-center gap-4">
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              href="/"
            >
              <span>Mood Echo</span>
            </Link>
            <nav className="ml-auto flex items-center gap-4">
              <Link
                className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
                href=""
              >
                Journal
              </Link>
              <Link
                className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
                href="analytics"
              >
                Analytics
              </Link>
              <Link
                className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
                href="analytics"
              >
                Sign Up
              </Link>
            </nav>
          </header>
          <div className="grid gap-4 p-4 rounded-4 border border-gray-200 shado-inset">
            <h1 className="text-2xl font-bold">How are you feeling today?</h1>
            <div className="grid grid-cols-5 items-center gap-4">
              <Button className="bg-emerald-400">Happy</Button>
              <Button className="bg-gray-600 text-white">Sad</Button>
              <Button className="bg-cyan-800 text-white">Anxious</Button>
              <Button className="bg-red-500">Angry</Button>
              <Button className="bg-red-500">Angry</Button>
            </div>
          </div>
          <div className="grid gap-4 p-4 rounded-lg border border-gray-200 shado-inset">
            <h2 className="text-xl font-semibold">Journal your thoughts</h2>
            <form className="flex flex-col gap-4">
              <Textarea
                className="min-h-[200px] shado-lg"
                placeholder="What's on your mind?"
              />
              <Button className="self-end">Save Entry</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
