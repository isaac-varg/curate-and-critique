"use server"

import { createClient } from "@/lib/supabase/server";

export const createPropertyDefinition = async (collection_id: string) => {
  const supabase = await createClient()


  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('property_definitions')
    .insert({
      collection_id,
      is_required: false,
      data_type_id: '1cba636a-ec4b-48a8-99ad-0122a73535a8',
      name: '',
    })
    .select("name, id")
    .limit(1)

  if (error) {
    console.error(error);
    throw new Error('Error creating the collection');
  }

  return data

}
