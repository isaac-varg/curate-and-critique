import Image from 'next/image'

type SadProps = {
    alt?: string
}

const Sad = ({ alt = 'Sad' }: SadProps) => {
    return (
        <div className='flex items-center justify-center'>

            <div className='w-[200px] h-[300px]'>
                <Image
                    src={sadCat}
                    alt={alt}

                />
            </div> 
        </div>

    )
}

export default Sad
