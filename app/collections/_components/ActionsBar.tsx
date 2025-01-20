"use client"

import { useRouter } from "next/navigation"

const ActionsBar = () => {

    const router = useRouter()

    const handleAddCollection = () => {
        router.push("/collections/add");
    }
    return (
        <div className='flex justify-start gap-x-4'>
            <button
                onClick={handleAddCollection}
                className='btn btn-secondary'>
                Add Collection
            </button>
        </div>
    )
}

export default ActionsBar
