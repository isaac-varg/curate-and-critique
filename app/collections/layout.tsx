import React from 'react'
import Breadcrumbs from '~/components/ui/breadcrumbs/Breadcrumbs'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-y-2  h-full'>
            <Breadcrumbs />

            {children}
        </div>
    )
}

export default layout
