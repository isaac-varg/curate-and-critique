import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

const CollectionsPage = async () => {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  const { data } = await supabase
    .from('collections')
    .select()

  console.log(data)
  return (
    <div>

    </div>
  )
}

export default CollectionsPage
