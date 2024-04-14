import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

async function handleSignOut() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error);
  } else {
    redirect("/");
  }
}

export default function Component() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  let user = null;
  async function getUser() {
    user = await supabase.auth.getUser();
  }
  getUser();
  return (
    <header className="flex items-center gap-4 p-4">
      <Link className="flex items-center gap-2 text-lg font-semibold" href="/">
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
          href="/forums/dashboard"
        >
          Forums
        </Link>
        {user ? (
          <Link
            className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
            href="/signup"
          >
            Sign Up
          </Link>
        ) : (
          <Link
            className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
            href="#"
            onClick={() => handleSignOut()}
          >
            Sign Out
          </Link>
        )}
      </nav>
    </header>
  );
}
