import React from 'react'
import SearchBar from './search/SearchBar'
import ButtonGroup from './buttonGroup/ButtonGroup'
import Logo from '../Logo'

const Header = () => {
    return (
        <div className='flex flex-col gap-y-2'>

            <div className='flex flex-row items-center justify-between gap-x-4'>
<div></div>
                <Logo />
                <ButtonGroup />

            </div>
        </div>
    )
}

export default Header
