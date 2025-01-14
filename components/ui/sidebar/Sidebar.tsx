import React from 'react'
import { TbBox } from 'react-icons/tb'
import SidebarGroup from './SidebarGroup'
import SidebarButton from './SidebarButton'

const staticSidebarElements = [
    {
        type: 'group',
        title: 'main',
        buttons: [
            {
                type: 'button',
                title: 'Collections',
                link: '/collections',
                icon: <TbBox />,
            }
        ]
    }
]

const Sidebar = async () => {
    
    

    return (
        <aside className='h-full pr-8 pb-8'>
            <div className='h-full w-64 rounded-xl bg-base-200 flex flex-col px-2 py-8'>

                {staticSidebarElements.map((group) => {
                    return (
                        <SidebarGroup title={group.title}>

                            {group.buttons.map((button) => {
                                return (<SidebarButton path={button.link}>
                                    <div className='flex items-center justify-start gap-x-2'>
                                        <span className='text-3xl'>{button.icon}</span>
                                        <p>{button.title}</p>
                                    </div>
                                </SidebarButton>)
                            })}
                        </SidebarGroup>
                    )
                })}



            </div>
        </aside>
    )
}

export default Sidebar
