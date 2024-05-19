"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { UserMetadata } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

export default function Component() {
  const router = useRouter();

  const [posts, setPosts] = useState<any[]>([]);
  const [user, setUser] = useState<UserMetadata>();

  async function getUser() {
    const supabase = createClient();
    const { data, error } = await supabase.auth.getUser();
    if (data) setUser(data);
  }
  getUser();
  async function getPosts() {
    const supabase = createClient();
    const {
      data: { session },
    } = await supabase.auth.getSession();
    const user = session?.user;
    const { data, error } = await supabase
      .from("forum_posts")
      .select("*")
      .limit(10);
    if (data) setPosts(data);
  }

  getPosts();

  return (
    <div className="flex flex-col w-full min-h-screen">
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
      </header>{" "}
      <div className="flex flex-1 w-full min-h-0">
        <div className="hidden border-r bg-gray-100/40 min-h-[calc(100vh_-_56px)] lg:block dark:bg-gray-800/40">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Button
              className="lg:ml-auto flex bg-green-500 text-white m-2"
              size="sm"
              variant="outline"
              onClick={() => router.push("post")}
            >
              Create thread
            </Button>
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href=""
            >
              Mental Health
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="/"
            >
              Relationships
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Learning
            </Link>
          </nav>
        </div>
        {posts.map((post) => (
          <div key={post.post_id} className="flex-1 min-h-0">
            <div className="grid gap-4 p-4 md:gap-8 md:p-6">
              <div className="grid gap-1">
                <Link
                  className="flex items-center gap-2 text-xl font-semibold"
                  href="forums/post/${post.id}"
                >
                  {post.title}
                </Link>
                <div className="text-sm leading-loose font-light text-gray-500 dark:text-gray-400">
                  {post.category}
                </div>
                <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                  {post.content}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="grid gap-1">
                    <div className="font-medium">{user?.email}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {post.created_at.toLocaleString("en-us")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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
