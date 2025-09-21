'use server'

import { createClient } from "@/lib/supabase/server"
import { Database } from "@/types/supabase.types"


type CreateCollectionData = Omit<Database['public']['Tables']['collections']['Insert'], 'user_id'>

export const createCollection = async (payload: CreateCollectionData) => {
  const supabase = await createClient()


  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('collections')
    .insert({
      user_id: user.id,
      ...payload, // This is the key change for handling many fields
    })
    .select("name, id")
    .limit(1)

  if (error) {
    console.error(error);
    throw new Error('Error creating the collection');
  }

  return data
}
