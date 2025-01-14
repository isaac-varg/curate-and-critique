"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

type SidebarButtonProps = {
    children: React.ReactNode;
    path: string
}

const SidebarButton = ({ children, path }: SidebarButtonProps) => {

    const { push } = useRouter()
    const handleClick = () => {
        push(path)
    }

    return (
        <button onClick={handleClick} className='btn flex items-center justify-start bg-base-300'>
            {children}
        </button>
    )
}

export default SidebarButton
