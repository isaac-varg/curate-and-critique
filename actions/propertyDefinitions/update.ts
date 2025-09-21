'use server'

import { createClient } from "@/lib/supabase/server"
import { Database } from "@/types/supabase.types"


type UpdatePropertyDefinitionPayload = Omit<Database['public']['Tables']['property_definitions']['Update'], 'collection_id'>

export const updatePropertyDefinition = async (propertyDefinitionId: string, payload: UpdatePropertyDefinitionPayload) => {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    throw new Error('User not authenticated');
  }

  const { data, error } = await supabase
    .from('property_definitions')
    .update({
      ...payload,
    })
    .eq('id', propertyDefinitionId);

  if (error) {
    console.error(error);
    throw new Error('Error updating the collection');
  }
  return data
}
