import React from 'react'
import { TbHeartPlus } from 'react-icons/tb'

const Logo = () => {
    return (
        <div className='flex items-center justify-center gap-x-2'>
            <span className='font-pacifico text-4xl font-bold'>Curate</span>
            <span className='text-2xl'><TbHeartPlus /></span>
            <span className='font-pacifico text-4xl font-bold'>Critique</span>
        </div>
    )
}

export default Logo
