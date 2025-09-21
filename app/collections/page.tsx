import Title from "@/components/ui/text/Title";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { LuPlus } from "react-icons/lu";
import CollectionCard from "./_components/CollectionCard";

const CollectionsPage = async () => {

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data: collections } = await supabase
    .from('collections')
    .select()

  if (!collections || collections.length === 0) return false


  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <Title>Collections</Title>
        <button className="btn btn-outline btn-secondary flex items-center gap-2"><LuPlus className="size-4" /> Add Collection </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {collections.map(collection => <CollectionCard key={collection.id} collection={collection} />)}
      </div>
    </div>
  )
}

export default CollectionsPage
