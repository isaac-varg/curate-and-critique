'use client'
import { Provider } from "@supabase/supabase-js"
import { Fragment, JSX } from "react"
import { oAuthSign } from "./(actions)/oAuthSignIn";
import { TbBrandDiscord } from "react-icons/tb";

type OAuthProvider = {
  name: Provider,
  displayName: string,
  icon?: JSX.Element,
};

const OAuthButtons = () => {

  const providers: OAuthProvider[] = [
    {
      name: 'discord',
      displayName: 'Discord',
      icon: <TbBrandDiscord className="size-7" />
    }
  ]

  const handleClick = async (provider: Provider) => {
    await oAuthSign(provider);
  }

  return (
    <Fragment>
      {providers.map(provider => (
        <button
          key={provider.name}
          className="justify-center py-4 rounded-xl btn-xl bg-purple-300 shadow shadow-purple-300  w-full flex items-center gap-2 font-semibold text-2xl hover:cursor-pointer hover:bg-purple-300/60"
          onClick={() => handleClick(provider.name)}
        >
          {provider.icon}
          {provider.displayName}
        </button>
      ))}
    </Fragment>
  )
}

export default OAuthButtons
