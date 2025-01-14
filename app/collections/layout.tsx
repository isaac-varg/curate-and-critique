import React from 'react'
import Breadcrumbs from '~/components/ui/breadcrumbs/Breadcrumbs'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='flex flex-col gap-y-2'>
            <Breadcrumbs />

            <div>{children}</div>
        </div>
    )
}

export default layout
