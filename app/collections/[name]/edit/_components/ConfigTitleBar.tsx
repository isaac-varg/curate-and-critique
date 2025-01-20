import React from 'react'
import { Text } from '~/components/text'

const ConfigTitleBar = ({ collectionName } : {collectionName: string}) => {
  return (
    <div>
        <Text.Title>{`${collectionName} Configuration`}</Text.Title>
    </div>
  )
}

export default ConfigTitleBar
