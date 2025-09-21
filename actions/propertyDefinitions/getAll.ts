'use server'

import { createClient } from "@/lib/supabase/server"
import { Tables } from "@/types/supabase.types";
import { redirect } from "next/navigation";

export const getAllPropertyDefinitions = async (collectionId: string) => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data } = await supabase
    .from("property_definitions")
    .select()
    .eq('collection_id', collectionId)

  return data;

}

export type PropertyDefiniton = Tables<'property_definitions'>
