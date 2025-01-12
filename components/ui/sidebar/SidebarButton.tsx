import { useRouter } from 'next/router';
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
        <button onClick={handleClick} className='btn'>
            {children}
        </button>
    )
}

export default SidebarButton
