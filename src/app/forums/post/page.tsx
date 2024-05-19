"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Component() {
  const [postContent, setPostContent] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const supabase = createClient();

  async function addPost() {
    if (supabase.auth.getUser() !== null) {
      const insertQuery = await supabase
        .from("forum_posts")
        .insert({ title: postTitle, content: postContent, category: category });
      console.log(insertQuery);
    }
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex border-r bg-gray-100/40 items-center gap-4 p-4">
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
      <div className="flex flex-1 w-full min-h-0">
        <div className="hidden border-r bg-gray-100/40 min-h-[calc(100vh_-_56px)] lg:block dark:bg-gray-800/40">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Button
              className="lg:ml-auto flex bg-green-500 text-white m-2"
              size="sm"
              variant="outline"
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
        <div className="mx-auto space-y-6 p-4">
          <div className="space-y-4">
            <h1 className="text-xl font-bold tracking-tight">
              Create a New Post
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Share your thoughts and experiences with the community.
            </p>
          </div>
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="grid grid-cols-1 gap-4">
                <Label className="text-m text-bold">Post Title</Label>
                <Textarea
                  className="w-full"
                  id="postTitle"
                  value={postTitle}
                  placeholder="Write your new post title here..."
                  onChange={(e) => {
                    setPostTitle(e.target.value);
                  }}
                />
                <Label className="text-m text-bold">Post Category</Label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Open</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Post Category</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={category}
                      onValueChange={setCategory}
                    >
                      <DropdownMenuRadioItem value="mental_health">
                        Mental Health
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="relationships">
                        Relationships
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="learning">
                        Learning
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <Label className="text-m text-bold">Post Content</Label>
                <Textarea
                  className="min-h-[200px] min-w-[900px] w-full"
                  id="postContent"
                  value={postContent}
                  placeholder="Write your new post content here..."
                  onChange={(e) => {
                    setPostContent(e.target.value);
                  }}
                />
              </div>
              <Button className="w-full" onClick={() => addPost()}>
                Post
              </Button>
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
