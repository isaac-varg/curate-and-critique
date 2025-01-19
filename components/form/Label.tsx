import React from 'react'


type FormLabelProps = {
    children: React.ReactNode
    size?: keyof typeof classes.size
    textColor?: keyof typeof classes.textColor
}


const classes = {
    size: {
        default: 'text-normal font-semibold'
    },
    textColor: {
        default: 'text-neutral-content'
    }
}

const FormLabel = ({ children, size = "default", textColor = 'default' }: FormLabelProps) => {
    return (
        <div className=''>
            <p className={`${classes.size[size]} ${classes.textColor[textColor]}`}>
                {children}
            </p>

        </div>
    )
}

export default FormLabel
