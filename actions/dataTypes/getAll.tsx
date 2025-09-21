'use server'

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation";

export const getAllDataTypes = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data } = await supabase
    .from("data_types")
    .select()

  return data;

}
