import React from 'react'
import Avatar from './Avatar'
import LightDarkToggle from './LightDarkToggle'

const ButtonGroup = () => {
  return (
    <div className='flex gap-x-3 items-center'>
        <LightDarkToggle />
        <Avatar />
    </div>
  )
}

export default ButtonGroup
