'use server'

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export const getCollection = async (collectionId: string) => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { error, data: collection } = await supabase
    .from('collections')
    .select(`*, property_definitions(count)`)
    .eq('id', collectionId)

  if (error || !collection) {
    throw new Error('Error retrieving collection.')
  }

  return collection[0];

}
