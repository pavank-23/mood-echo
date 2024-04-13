import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function signUpNewUser(email: string, password: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "https://localhost:3000/",
      },
    });
    if (data) console.log(data);
    if (error) console.log(error);
  }