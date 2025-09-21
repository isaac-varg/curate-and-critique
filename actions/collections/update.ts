'use server'

import { createClient } from "@/lib/supabase/server"
import { Database } from "@/types/supabase.types"


type UpdateCollectionData = Omit<Database['public']['Tables']['collections']['Update'], 'user_id'>

export const updateCollection = async (collectionId: string, payload: UpdateCollectionData) => {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('collections')
    .update({
      ...payload, // This is the key change for handling many fields
    })
    .eq('id', collectionId);

  if (error) {
    console.error(error);
    throw new Error('Error updating the collection');
  }
  return data
}
