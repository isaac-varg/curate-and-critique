"use client"
import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React from 'react'

const Avatar = () => {

    const { data: session } = useSession()

    if (!session) {
        redirect("/api/auth/signin")
    }

    const userIcon = session.user?.image || ""


    return (

        <div className="dropdown dropdown-end">

            <div tabIndex={0} role="button" >
                <div className="avatar hover:cursor-pointer">

                    <div className="mask mask-hexagon w-14">
                        <img src={userIcon} />
                    </div>
                </div>
            </div>


            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                <li onClick={() => signIn()}><a>Sign Out</a></li>
            </ul>

        </div>
    )
}

export default Avatar

