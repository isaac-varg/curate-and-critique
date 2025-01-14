import React from 'react'
import Avatar from './Avatar'
import ThemeSwitcher from './ThemeSwitcher'

const ButtonGroup = () => {

    return (
        <div className='flex gap-x-3 items-center'>

            <ThemeSwitcher />
            <Avatar />
        </div>
    )
}

export default ButtonGroup
