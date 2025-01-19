import React from 'react'

type ErrorProps = {
    warning: string
}

const FormError = ({ warning } : ErrorProps) => {
  return (
    <p className='text-sm text-error'>{warning}</p>
  )
}

export default FormError
