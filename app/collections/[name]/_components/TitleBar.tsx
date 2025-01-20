"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { TbSettings } from 'react-icons/tb'
import { Collection } from '~/actions/collection/getCollections'
import { Text } from '~/components/text';

const TitleBar = ({ collection }: { collection: Collection }) => {

    const router = useRouter();
    
    const handleConfigurationButton = () => {
        router.push(`/collections/${collection.name}/edit?id=${collection.id}`)
    }

    return (
        <div className='flex justify-between items-center'>

            <Text.Title>{collection.name}</Text.Title>

            <div className='flex gap-x-2'>

                <div className='tooltip' data-tip={`Configure ${collection.name}`}>
                    <button 
                        className='btn'
                        onClick={handleConfigurationButton}
                    >
                        <span className='text-2xl text-base-content'><TbSettings /></span>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default TitleBar
