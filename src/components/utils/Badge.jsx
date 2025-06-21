import React from 'react'

const Badge = ({ children, style}) => {
    return (
        <span className={`badge badge-soft badge-primary ${style}`}>{children}</span>
    )
}

export default Badge