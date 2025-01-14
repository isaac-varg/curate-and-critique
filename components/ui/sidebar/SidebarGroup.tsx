import React from 'react'

type SidebarGroupProps = {
    children: React.ReactNode;
    title: string
}

const SidebarGroup = ({ children, title }: SidebarGroupProps) => {
    return (
        <div className='flex flex-col gap-y-4'>
            <div className='flex justify-center items-center'>
                <span className='font-semibold text-2xl uppercase'>{title}</span>
            </div>

            <div className='flex flex-col gap-y-2'>
                {children}
            </div>
        </div>
    )
}

export default SidebarGroup
