"use client";

import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function Component() {
  const [mood, setMood] = useState("");
  const [journal, setJournal] = useState("");
  const [moodEntries, setMoodEntries] = useState<any[]>([]);

  async function addEntry() {
    const supabase = createClient();
    if (supabase.auth.getUser() !== null) {
      const insertQuery = await supabase
        .from("mood_entry")
        .insert({ mood: mood, log: journal });
      console.log(insertQuery);
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(e.target.value, mood, journal);
    addEntry();
  }

  async function getData() {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const user = session?.user;
    const { data, error } = await supabase
      .from("mood_entry")
      .select("*")
      .eq("user_id", user?.id);
    if (data) setMoodEntries(data);
  }
  getData();

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
          <div className="grid gap-4 p-4 rounded-lg border border-gray-200 shado-inset">
            <h1 className="text-2xl font-bold">How are you feeling today?</h1>
            <div className="grid grid-cols-5 items-center gap-4">
              <Button
                className="rounded-full bg-emerald-300"
                onClick={() => setMood("happy")}
              >
                Happy
              </Button>
              <Button
                className="rounded-full bg-cyan-300 text-white"
                onClick={() => setMood("anxious")}
              >
                Anxious
              </Button>
              <Button
                className="rounded-full bg-purple-300"
                onClick={() => setMood("frustrated")}
              >
                Frustrated
              </Button>
              <Button
                className="rounded-full bg-slate-300 text-white"
                onClick={() => setMood("sad")}
              >
                Sad
              </Button>
              <Button
                className="rounded-full bg-red-300"
                onClick={() => setMood("angry")}
              >
                Angry
              </Button>
            </div>
          </div>
          <div className="grid gap-4 p-4 rounded-lg border border-gray-200 shado-inset">
            <h2 className="text-xl font-semibold">Journal your thoughts</h2>
            <div className="flex flex-col gap-4">
              <Textarea
                className="min-h-[200px] shado-lg"
                placeholder="What's on your mind?"
                onChange={(e) => {
                  setJournal(e.target.value);
                }}
              />
              <Button
                className="self-end"
                type="submit"
                onClick={(e) => handleSubmit(e)}
              >
                Save Entry
              </Button>
            </div>
          </div>
          <div>
            <div className="grid gap-4 p-4 rounded-lg border border-gray-200 shado-inset">
              <h2 className="text-xl font-semibold">Journal History</h2>
              {moodEntries.map((moodEntry) => (
                <div
                  key={moodEntry.entry_id}
                  className="mb-4 p-4 bg-white-800 rounded-lg shadow"
                >
                  <h2 className="text-l text-black mb-2">
                    {new Date(moodEntry.created_at).toLocaleString("en-us")}
                  </h2>
                  <p className="text-s text-black mb-2">{moodEntry.mood}</p>
                  <p className="text-s text-black mb-2">{moodEntry.log}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
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
