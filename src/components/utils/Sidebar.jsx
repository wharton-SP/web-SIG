import React from 'react'

const Sidebar = ({ children }) => {
    return (
        <div className='hidden md:block bg-base-100 h-full min-w-1/7 p-4 pt-20 overflow-y-scroll'>
            <div className='bg-base-300 p-2 rounded-lg min-h-full'>
                {children}
            </div>
        </div>
    )
}

export default Sidebar