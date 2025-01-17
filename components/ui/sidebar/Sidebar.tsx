import React from 'react'
import SidebarGroup from './SidebarGroup'
import SidebarButton from './SidebarButton'
import { mainStaticSidebar } from '~/constants/staticSidebarElements'
import { getCollections } from '~/actions/collection/getCollections'


const Sidebar = async () => {

    const collections = await getCollections()

    return (
        <aside className='h-full pr-8 pb-8'>
            <div className='h-full w-64 rounded-xl bg-base-200 flex flex-col px-2 py-8'>

                <div className='flex flex-col gap-y-24'>
                    {/* first static part of sidebar */}
                    {mainStaticSidebar.map((group) => {
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

                    {/* user collections */}

                    <SidebarGroup title='Collections'>
                        {collections.length === 0 && <SidebarButton path='/collections'>(ಥ﹏ಥ) sadge, nothing here</SidebarButton>}


                        {collections.map((collection) => <SidebarButton path={`/collections/${collection.name}?id${collection.id}`} >{collection.name}</SidebarButton>)}

                    </SidebarGroup>

                </div>

            </div>
        </aside>
    )
}

export default Sidebar
