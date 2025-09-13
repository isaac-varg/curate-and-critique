import { createClient } from "@/lib/supabase/server"
import CollectionForm from "./_components/CollectionForm"

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ collectionId: string }>
}) {

  const supabase = await createClient()
  const collectionId = (await searchParams).collectionId
  const isNew = !collectionId

  const { data } = await supabase
    .from('collections')
    .select()
    .eq('id', collectionId)


  return (
    <div>
      <CollectionForm />
    </div>
  )
}
