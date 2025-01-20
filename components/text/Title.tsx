import React from 'react'

type TitleProps = {
    children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
    return (
        <h1 className='text-4xl font-bold'>{children}</h1>
    )
}

export default Title
