import React from 'react'
import SearchBar from './search/SearchBar'
import ButtonGroup from './buttonGroup/ButtonGroup'
import Logo from '../Logo'
import AppStateGetter from '~/components/app/AppStateGetter'

const Header = async () => {
    return (

        <div className='flex flex-row items-center justify-between'>

            <AppStateGetter />
            <SearchBar />
            <Logo />
            <ButtonGroup />

        </div>
    )
}

export default Header
