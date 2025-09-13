'use server'

import { createClient } from "@/lib/supabase/server"
import { Provider } from "@supabase/supabase-js"
import { redirect } from "next/navigation"

const getURL = (path?: string) => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/'
  // Make sure to include `https://` when not localhost.
  url = url.startsWith('http') ? url : `https://${url}`
  // Make sure to include a trailing `/`.
  url = url.endsWith('/') ? url : `${url}/${path}`
  return url
}

export const oAuthSign = async (provider: Provider) => {
  const supabase = await createClient()
  const redirectTo = getURL("/auth/callback")
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo,
    },
  })

  if (error) {
    redirect('/login')
  }

  if (data.url) {
    redirect(data.url) // use the redirect API for your server framework
  }
}
