import React from 'react'
import SearchBar from './search/SearchBar'
import ButtonGroup from './buttonGroup/ButtonGroup'
import Logo from '../Logo'
import AppStateGetter from '~/components/app/AppStateGetter'

const Header = async () => {
    return (
        <div className='flex flex-col gap-y-2'>
            <AppStateGetter />

            <div className='flex flex-row items-center justify-between gap-x-4'>
                <SearchBar />
                <Logo />
                <ButtonGroup />

            </div>
        </div>
    )
}

export default Header
