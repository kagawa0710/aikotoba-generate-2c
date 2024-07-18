import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";

// Supabase URL and Key from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error("Missing Supabase URL or Key");
}

export function createClient() {
  if (typeof window === "undefined") {
    // サーバーサイド環境
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase URL or Key is undefined");
    }
    return createSupabaseClient(supabaseUrl, supabaseKey);
  } else {
    // クライアントサイド環境
    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase URL or Key is undefined");
    }
  }
}
