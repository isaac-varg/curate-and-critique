import React from 'react'

type SidebarGroupProps = {
    children: React.ReactNode;
}

const SidebarGroup = ({ children }: SidebarGroupProps) => {
    return (
        <div className='flex justify-center items-center'>
            <span className='font-semibold text-2xl'>{children}</span>
        </div>
    )
}

export default SidebarGroup
