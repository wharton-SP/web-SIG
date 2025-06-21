import React from 'react'

const Sidebar = ({ children }) => {
    return (
        <div className='bg-base-100 h-full pl-4 pb-4 pt-20 overflow-y-scroll'>
            <div className='bg-base-300 p-2 rounded-lg min-h-full'>
                {children}
            </div>
        </div>
    )
}

export default Sidebar