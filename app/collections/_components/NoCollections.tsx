'use client'
import Image from 'next/image'
import React from 'react'
import sadCat from "~/assets/art/sad-cat.svg"
import { TbPlus } from 'react-icons/tb'
import { useRouter } from 'next/navigation'

const NoCollections = () => {
    
    const router = useRouter()

    return (
        <div className='flex flex-col gap-y-6 items-center justify-between'>

            <h1 className='text-2xl font-black text-secondary'>No Collections Found</h1>
            <Image
                src={sadCat}
                alt={'Cat sad because no collections'}
                width={898 * .23}
                height={1297 * .23}

            />

            <button className='btn btn-xl' onClick={() => router.push('/collections/add')}>
                <span className='text-2xl'><TbPlus /></span>
                Collection
            </button>

        </div>
    )
}

export default NoCollections
