import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex h-14 items-center gap-4 border-b lg:h-20 bg-gray-100/40 px-4 dark:bg-gray-800/40 md:px-6">
        <Link className="lg:hidden" href="#">
          Mood Echo
          <span className="sr-only">Home</span>
        </Link>
        <Link
          className="hidden lg:flex items-center gap-2 font-semibold"
          href="#"
        >
          Mood Echo
        </Link>
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
              href="#"
            >
              Mental Health
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Relationships
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Learning
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              Happiness
            </Link>
          </nav>
        </div>
        <div className="flex-1 min-h-0">
          <div className="grid gap-4 p-4 md:gap-8 md:p-6">
            <div className="grid gap-1">
              <Link
                className="flex items-center gap-2 text-xl font-semibold"
                href="#"
              >
                How to deal with anxiety and panic attacks
              </Link>
              <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                aspernatur et quos repellendus nemo dolor sunt numquam in error
                magnam obcaecati esse, nam consequuntur sed corrupti ipsam?
                Voluptate, illo optio!
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="grid gap-1">
                  <div className="font-medium">anxiousmind</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
