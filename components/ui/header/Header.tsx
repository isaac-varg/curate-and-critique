import React from 'react'
import SearchBar from './search/SearchBar'
import ButtonGroup from './buttonGroup/ButtonGroup'
import Logo from '../Logo'
import { getConfigs } from '~/actions/user/getConfigs'
import AppStateSetter from '~/components/app/AppStateSetter'

const Header = async () => {

    const configs = await getConfigs()



    return (
        <div className='flex flex-col gap-y-2'>

            <AppStateSetter configs={configs} />

            <div className='flex flex-row items-center justify-between gap-x-4'>
                <SearchBar />
                <Logo />
                <ButtonGroup />

            </div>
        </div>
    )
}

export default Header
