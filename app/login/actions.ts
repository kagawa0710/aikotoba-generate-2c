"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/client";

export async function login(formData: FormData) {
  const supabase = createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return { error: "Invalid input" };
  }

  if (!supabase) {
    return { error: "Supabase client is not defined" };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: `Login failed: ${error.message}` };
  }

  revalidatePath("/", "layout");
  return { success: true };
}

export async function signup(formData: FormData) {
  const supabase = createClient();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const userId = formData.get("userId") as string;
  const displayName = formData.get("displayName") as string;

  // if (!email || !password || !userId || !displayName) {
  //   return { error: "Invalid input" };
  // }
  if (!email || !password) {
    return { error: "Invalid input" };
  }

  // // Check if userId already exists
  // const { data: userExists, error: userCheckError } = await supabase
  //   .from("User")
  //   .select("userid")
  //   .eq("userid", userId)
  //   .single();

  // if (userCheckError && userCheckError.details !== "0 rows") {
  //   return { error: `r ID: ${userCheckError.message}` };
  // }

  // if (userExists) {
  //   return { error: "User ID already exists" };
  // }

  // // Sign up the user
  // const { error: signUpError } = await supabase.auth.signUp({
  //   email,
  //   password,
  // });

  // if (signUpError) {
  //   return { error: `Signup failed: ${signUpError.message}` };
  // }

  // // Insert user details into User table
  // const { error: insertError } = await supabase.from("User").insert({
  //   userid: userId,
  //   email,
  //   displayname: displayName,
  // });

  // if (insertError) {
  //   return { error: `Error inserting user details: ${insertError.message}` };
  // }

  revalidatePath("/", "layout");
  return { success: true };
}
