import React from 'react'

const Note = ({ children }) => {
    return (
        <div className='italic bg-accent w-max p-2 rounded-lg mt-2'>
            {children}
        </div>
    )
}

export default Note