import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <header className="flex h-14 items-center gap-4 border-b lg:h-20 bg-gray-100/40 px-4 dark:bg-gray-800/40 md:px-6">
        <Link className="lg:hidden" href="#">
          <SunIcon className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <Link
          className="hidden lg:flex items-center gap-2 font-semibold"
          href="#"
        >
          <SunIcon className="h-6 w-6" />
          Psych Forum
        </Link>
        <form className="ml-auto flex-1 lg:mx-4 lg:pl-4">
          <div className="relative">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
              className="w-full bg-white shadow-none appearance-none pl-8 dark:bg-gray-950"
              placeholder="Search topics..."
              type="search"
            />
          </div>
        </form>
        <Button className="lg:ml-auto" size="sm" variant="outline">
          Create thread
        </Button>
      </header>
      <div className="flex flex-1 w-full min-h-0">
        <div className="hidden border-r bg-gray-100/40 min-h-[calc(100vh_-_56px)] lg:block dark:bg-gray-800/40">
          <nav className="grid items-start px-4 text-sm font-medium">
            <Link
              className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900  transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
              href="#"
            >
              <BrainIcon className="h-4 w-4" />
              Mental Health
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <UsersIcon className="h-4 w-4" />
              Relationships
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <BookIcon className="h-4 w-4" />
              Learning
            </Link>
            <Link
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
              href="#"
            >
              <SmileIcon className="h-4 w-4" />
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
                <Image
                  src="/placeholder.svg"
                  alt="Avatar"
                  height={32}
                  width={32}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  className="rounded-full"
                />
                <div className="grid gap-1">
                  <div className="font-medium">anxiousmind</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-1">
              <Link
                className="flex items-center gap-2 text-xl font-semibold"
                href="#"
              >
                How to deal with anxiety and panic attacks
              </Link>
              <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quisquam at, excepturi, quam voluptatibus minus quasi
                consequatur inventore vero non voluptate iure. Nesciunt
                cupiditate minus voluptatem ex, vero officiis saepe.
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Image
                  src="/placeholder.svg"
                  alt="Avatar"
                  height={32}
                  width={32}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  className="rounded-full"
                />
                <div className="grid gap-1">
                  <div className="font-medium">anxiousmind</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    3 days ago
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-1">
              <Link
                className="flex items-center gap-2 text-xl font-semibold"
                href="#"
              >
                How to deal with anxiety and panic attacks
              </Link>
              <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Quibusdam hic libero iste at optio harum accusantium nam,
                praesentium minima sint ducimus dignissimos nesciunt, rem
                possimus facere nulla corporis neque deserunt?
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Image
                  src="/placeholder.svg"
                  alt="Avatar"
                  height={32}
                  width={32}
                  style={{
                    aspectRatio: "32/32",
                    objectFit: "cover",
                  }}
                  className="rounded-full"
                />
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

function BookIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}

function BrainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function SmileIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  );
}

function SunIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  );
}

function UsersIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
