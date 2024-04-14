import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Component() {
  return (
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight lg:text-5xl xl:text-6xl">
          Create a New Post
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Share your thoughts and experiences with the community.
        </p>
      </div>
      <div className="mt-8 grid items-start gap-4 sm:grid-cols-[100px_1fr]">
        <div className="flex items-center space-x-4">
          <Image
            alt="Avatar"
            className="rounded-full"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "40/40",
              objectFit: "cover",
            }}
            width="40"
          />
          <div className="space-y-1.5">
            <div className="font-semibold">@miked</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Posted on August 24, 2023
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 space-y-6">
        <div className="space-y-2">
          <form>
            <div className="grid grid-cols-1 gap-4">
              <Label className="sr-only" htmlFor="post">
                Post Content
              </Label>
              <Textarea
                className="min-h-[200px]"
                id="post"
                placeholder="Write your new post here..."
              />
            </div>
            <Button>Post</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
