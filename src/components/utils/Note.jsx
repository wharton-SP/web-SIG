import React from 'react'

const Note = ({ children }) => {
    return (
        <div className='italic bg-accent p-2 wrap-normal rounded-lg mt-2'>
            {children}
        </div>
    )
}

export default Note